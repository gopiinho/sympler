'use client'
import { Address } from 'viem'
import CoinDisplay from './coin-display'
import { useQuery } from '@tanstack/react-query'
import CoinPlaceholder from '../placeholders/coin-placeholder'
import { getWalletTokenInfo } from '@/utils/api/api'
import { TokenInfoType } from '@/types/token'

interface BalanceSeekerProps {
  address: Address
}

export default function BalanceSeeker({ address }: BalanceSeekerProps) {
  const { data: tokenData, isFetching } = useQuery({
    queryKey: ['ownedTokenBalances'],
    queryFn: () => getWalletTokenInfo(address),
    refetchOnWindowFocus: false,
  })

  return (
    <>
      <div className='scrollbar flex h-full flex-col gap-6 overflow-y-scroll ~py-4/6'>
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
              {tokenData?.result?.map((token: TokenInfoType, index: number) => (
                <CoinDisplay
                  key={index}
                  name={token.name}
                  symbol={token.symbol}
                  usd_price={token.usd_price}
                  balance={token.balance_formatted}
                  usd_value={token.usd_value}
                  logo={token.logo}
                  usd_price_24hr_percent_change={
                    token.usd_price_24hr_percent_change
                  }
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
