'use client'
import { useBalanceStore } from '@/context/balance-store'

export default function TotalBalance() {
  const { totalBalance, isLoadingBalance } = useBalanceStore()

  const formattedUserBalance = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalBalance)

  return (
    <div className='items-end justify-center text-end text-card-foreground'>
      <h4 className='text-foreground/80 ~text-base/lg'>Total Balance</h4>
      {isLoadingBalance ? (
        <span className='flex h-11 w-40 animate-pulse rounded-md bg-muted-foreground/40' />
      ) : (
        <div className='font-nats text-foreground ~text-2xl/5xl'>
          {formattedUserBalance}
        </div>
      )}
    </div>
  )
}
