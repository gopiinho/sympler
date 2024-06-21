'use client'
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

  const { data: nativeToken, isFetching: isFetchingNativeBalance } = useBalance(
    {
      address: address,
    }
  )

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
      <div className='scrollbar flex h-[100dvh] flex-col gap-6 overflow-scroll ~py-4/6'>
        <div className='grid gap-1'>
          <span className='px-2 font-semibold text-primary/50 lg:px-5'>
            Native
          </span>
          <CoinDisplay
            name={chain?.nativeCurrency.name ?? null}
            symbol={nativeToken?.symbol ?? null}
            balance={nativeToken?.formatted ?? null}
          />
        </div>
        {/*  */}
        <div className='grid gap-1'>
          <span className='px-2 font-semibold text-primary/50 lg:px-5'>
            ERC20
          </span>
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
