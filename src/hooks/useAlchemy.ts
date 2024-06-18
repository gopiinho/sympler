import { Alchemy, Network } from 'alchemy-sdk'
import { Address } from 'viem'

export type OwnedTokensData = {
  name: string | null
  symbol: string | null
  balance: string | null
  address?: Address | null
  logo?: string | null
}

const config = {
  apiKey: process.env.NEXT_PUBLIC_BASE_ALCHEMY,
  network: Network.BASE_MAINNET,
}
const alchemy = new Alchemy(config)

export default function useAlchemy(userAddress: Address) {
  async function getOwnedTokenBalances(): Promise<OwnedTokensData[]> {
    const balances = await alchemy.core.getTokenBalances(userAddress)
    const nonZeroBalances = balances.tokenBalances.filter((token) => {
      return token.tokenBalance !== '0'
    })
    const tokenBalances: OwnedTokensData[] = []
    for (let token of nonZeroBalances) {
      let balance: string | number | null = token.tokenBalance
      const metadata = await alchemy.core.getTokenMetadata(token.contractAddress)
      if (metadata.decimals) {
        const readableBalance = Number(balance) / Math.pow(10, metadata.decimals)
        balance = readableBalance.toFixed(2)
        metadata.logo
      }
      tokenBalances.push({
        name: metadata.name,
        symbol: metadata.symbol,
        balance: balance,
        logo: metadata.logo,
      })
    }
    return tokenBalances
  }

  return { getOwnedTokenBalances }
}
