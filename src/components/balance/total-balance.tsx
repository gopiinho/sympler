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
      <h4 className='font-nats text-foreground/80 ~text-lg/xl'>Net Worth</h4>
      {isLoadingBalance ? (
        <span className='flex h-11 w-40 animate-pulse rounded-md bg-muted-foreground/40' />
      ) : (
        <div className='py-1 font-semibold text-foreground ~text-xl/4xl'>
          {formattedUserBalance}
        </div>
      )}
    </div>
  )
}
