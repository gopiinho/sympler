'use client'
import { useBalanceStore } from '@/context/balance-store'

export default function TotalBalance() {
  const { totalBalance, isLoadingBalance } = useBalanceStore()

  const formattedUserBalance = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalBalance)

  return (
    <div className='items-end justify-center text-end text-card-foreground ~text-3xl/5xl'>
      <h4 className='text-xl text-foreground/80'>Total Balance</h4>
      {isLoadingBalance ? (
        <span className='flex h-10 w-40 animate-pulse rounded-md bg-muted-foreground/40' />
      ) : (
        <span>{formattedUserBalance}</span>
      )}
    </div>
  )
}
