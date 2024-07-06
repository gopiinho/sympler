'use client'
import { useEffect } from 'react'
import { Address } from 'viem'
import CoinDisplay from './coin-display'
import { useQuery } from '@tanstack/react-query'
import CoinPlaceholder from '../placeholders/coin-placeholder'
import { getWalletTokenInfo } from '@/utils/api/api'
import { TokenInfoType } from '@/types/token'
import { useBalanceStore } from '@/context/balance-store'

interface BalanceSeekerProps {
  address: Address
}

export default function BalanceSeeker({ address }: BalanceSeekerProps) {
  const { setTotalBalance } = useBalanceStore()

  const { data: tokenData, isFetching } = useQuery({
    queryKey: ['ownedTokenBalances'],
    queryFn: () => getWalletTokenInfo(address),
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (tokenData?.result) {
      const totalBalance = tokenData.result.reduce(
        (sum: number, token: TokenInfoType) => {
          const usdValue = token.usd_value || 0
          return sum + usdValue
        },
        0
      )

      setTotalBalance(totalBalance)
    }
  }, [tokenData])

  return (
    <>
      <div className='scrollbar flex h-full flex-col gap-6 overflow-y-scroll ~py-4/6'>
        <div className='grid gap-1'>
          <div className='flex justify-between font-semibold text-primary/50 ~px-3/8'>
            <span>Tokens</span>
            <div className='flex justify-between ~gap-6/12 xl:w-[50%]'>
              <div className='hidden w-24 gap-1 text-end xl:grid'>
                <span className='text-primary/50 ~text-xs/sm'>Price USD</span>
              </div>
              <div className='hidden w-24 gap-1 text-end xl:grid'>
                <span className='text-primary/50 ~text-xs/sm'>24h</span>
              </div>
              <div className='grid w-20 gap-1 text-end'>
                <span className='text-primary/50 ~text-xs/sm'>Amount</span>
              </div>
              <div className='grid w-20 gap-1 text-end'>
                <span className='text-primary/50 ~text-xs/sm'>Value</span>
              </div>
            </div>
          </div>
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
