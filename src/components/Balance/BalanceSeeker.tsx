import { Address } from 'viem'
import { useBalance, useAccount } from 'wagmi'
import CoinDisplay from './CoinDisplay'
import { useQuery } from '@tanstack/react-query'
import useAlchemy, { OwnedTokensData } from '@/hooks/useAlchemy'
import CoinPlaceholder from '../Placeholders/CoinPlaceholder'

interface BalanceSeekerProps {
  address: Address
}

export default function BalanceSeeker({ address }: BalanceSeekerProps) {
  const { chain } = useAccount()
  const { getOwnedTokenBalances } = useAlchemy(address)

  const { data: nativeToken } = useBalance({
    address: address,
  })

  const { data: tokenData, isFetching } = useQuery({
    queryKey: ['ownedTokenBalances'],
    queryFn: () => getOwnedTokenBalances(),
    refetchOnWindowFocus: false,
  })
  if (tokenData) {
    console.log(tokenData[1])
  }
  return (
    <>
      <div className='flex flex-col xl:py-4 h-[100dvh] overflow-scroll gap-6 scrollbar'>
        <div className='grid gap-1'>
          <span className='font-semibold text-primary/50 px-2 xl:px-5'>Native</span>
          <CoinDisplay
            name={chain?.nativeCurrency.name ?? null}
            symbol={nativeToken?.symbol ?? null}
            balance={nativeToken?.formatted ?? null}
          />
        </div>
        {/*  */}
        <div className='grid gap-1'>
          <span className='font-semibold px-2 xl:px-5 text-primary/50'>ERC20</span>
          {isFetching ? (
            <>
              <CoinPlaceholder />
              <CoinPlaceholder />
              <CoinPlaceholder />
              <CoinPlaceholder />
            </>
          ) : (
            <>
              {tokenData?.map((token: OwnedTokensData, index: number) => (
                <CoinDisplay
                  key={index}
                  logo={token.logo}
                  name={token.name}
                  symbol={token.symbol}
                  balance={token.balance}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
