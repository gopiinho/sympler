'use client'

import { useAccount } from 'wagmi'
import BalanceSeeker from '@/components/Balance/BalanceSeeker'

export default function Home() {
  const { address, chain } = useAccount()
  return <div className='w-full mx-auto'>{address && chain ? <BalanceSeeker address={address} /> : 'NO ADDRESS'}</div>
}
