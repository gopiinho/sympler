'use client'
import { useEffect, useMemo } from 'react'
import { Address } from 'viem'
import CoinDisplay from './coin-display'
import { useQuery } from '@tanstack/react-query'
import CoinPlaceholder from '../placeholders/coin-placeholder'
import { getWalletTokenInfo } from '@/utils/api/api'
import { TokenInfoType } from '@/types/token'
import { useBalanceStore } from '@/context/balance-store'
import { useSearchParams } from 'next/navigation'

interface BalanceSeekerProps {
  address: Address
}

const useFilterStatus = () => {
  const searchParams = useSearchParams()

  return {
    isPercentFilter: searchParams.has('percent'),
    isZeroFilter: searchParams.has('zero'),
    isSpamFilter: searchParams.has('spam'),
  }
}

export default function BalanceSeeker({ address }: BalanceSeekerProps) {
  const filters = useFilterStatus()
  const { setTotalBalance, setLoadingBalance } = useBalanceStore()

  const { data: tokenData, isFetching } = useQuery({
    queryKey: ['ownedTokenBalances'],
    queryFn: () => getWalletTokenInfo(address),
    refetchOnWindowFocus: false,
  })

  const tokenList = useMemo(() => {
    if (!tokenData?.result) return []

    return tokenData.result.filter((token: TokenInfoType) => {
      if (!filters.isSpamFilter && token.possible_spam) return false
      if (!filters.isZeroFilter && (token.usd_value ?? 0) <= 0.01) return false
      return true
    })
  }, [tokenData, filters])

  useEffect(() => {
    setLoadingBalance(isFetching)
  }, [isFetching, setLoadingBalance])

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
      <div className='scrollbar flex h-full flex-col gap-6 overflow-y-scroll ~pb-4/6'>
        <div className='grid'>
          <div className='flex justify-between py-1 font-semibold text-primary/50 ~px-3/6'>
            <span>Tokens</span>
            <div className='flex justify-between ~gap-6/12 xl:w-[50%]'>
              <div className='hidden w-24 gap-1 text-end xl:grid'>
                <span className='text-primary/50 ~text-xs/sm'>Price USD</span>
              </div>
              <div className='hidden w-24 gap-1 text-end xl:grid'>
                <span className='text-primary/50 ~text-xs/sm'>24h</span>
              </div>
              <div className='grid gap-1 text-end ~w-16/20'>
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
              {tokenList?.map((token: TokenInfoType, index: number) => (
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
                  portfolio_percentage={token.portfolio_percentage}
                  native_token={token.native_token}
                  isPercentFilter={filters.isPercentFilter}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
