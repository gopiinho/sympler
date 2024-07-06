'use client'
import { useBalanceStore } from '@/context/balance-store'

export default function TotalBalance() {
  const userBalance = useBalanceStore()

  const formattedUserBalance = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(userBalance.totalBalance)

  return (
    <div className='items-center justify-center text-end text-card-foreground ~text-3xl/5xl'>
      <h4 className='text-xl text-foreground/80'>Total Balance</h4>
      <span>{formattedUserBalance}</span>
    </div>
  )
}
