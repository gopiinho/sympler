import { Address } from 'viem'
import { useBalance, useAccount } from 'wagmi'
import CoinDisplay from './CoinDisplay'
import { getUserTokens } from '@/utils/Api/api'

interface BalanceSeekerProps {
  address: Address
}

export default function BalanceSeeker({ address }: BalanceSeekerProps) {
  const { chain } = useAccount()

  const { data: nativeToken } = useBalance({
    address: address,
  })

  const tokenData = getUserTokens(address)
  console.log(tokenData)

  return (
    <>
      <CoinDisplay name={chain?.nativeCurrency.name} symbol={nativeToken?.symbol} balance={nativeToken?.formatted} />
      {/* <textarea>{tokenData}</textarea> */}
    </>
  )
}
