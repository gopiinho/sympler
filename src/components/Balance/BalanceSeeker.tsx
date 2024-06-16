import { Address } from 'viem'
import { useBalance, useAccount } from 'wagmi'
import CoinDisplay from './CoinDisplay'

interface BalanceSeekerProps {
  address: Address
}

export default function BalanceSeeker({ address }: BalanceSeekerProps) {
  const { chain } = useAccount()

  const { data: nativeToken } = useBalance({
    address: address,
  })

  return (
    <>
      <CoinDisplay name={chain?.nativeCurrency.name} symbol={nativeToken?.symbol} balance={nativeToken?.formatted} />
    </>
  )
}
