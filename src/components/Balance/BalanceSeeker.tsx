'use client'
import { useState } from 'react'
import { Address } from 'viem'
import CoinDisplay from './CoinDisplay'
import { useQuery } from '@tanstack/react-query'
import CoinPlaceholder from '../Placeholders/CoinPlaceholder'
import { getWalletTokenInfo } from '@/utils/Api/api'
import { TokenInfoType } from '@/types/token'
import { mockTokenData } from './mockdata'

interface BalanceSeekerProps {
  address: Address
}

export default function BalanceSeeker({ address }: BalanceSeekerProps) {
  // const { data: tokenData, isFetching } = useQuery({
  //   queryKey: ['ownedTokenBalances'],
  //   queryFn: () => getWalletTokenInfo(address),
  //   refetchOnWindowFocus: false,
  // })

  const isFetching = false

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
              {mockTokenData.result?.map(
                (token: TokenInfoType, index: number) => (
                  <CoinDisplay
                    key={index}
                    name={token.name}
                    symbol={token.symbol}
                    balance={token.balance_formatted}
                    usd_value={token.usd_value}
                    logo={token.logo}
                  />
                )
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
