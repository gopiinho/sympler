'use client'

import { useAccount } from 'wagmi'
import BalanceSeeker from '@/components/Balance/BalanceSeeker'

export default function Home() {
  const { address, chain } = useAccount()
  return (
    <div className='mx-auto w-full'>
      {address && chain ? <BalanceSeeker address={address} /> : 'NO ADDRESS'}
    </div>
  )
}
