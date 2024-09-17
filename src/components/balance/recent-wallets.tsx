'use client'
import { Address } from 'viem'
import { useState, useEffect } from 'react'
import { formatAddress } from '@/utils/formatters'
import { useRouter } from 'next/navigation'

function getRecentWallets(): Address[] | [] {
  const storedWallets = localStorage.getItem('recentAddresses')
  if (storedWallets) {
    return JSON.parse(storedWallets) as Address[]
  }
  return []
}

export default function RecentWallets() {
  const [wallets, setWallets] = useState<Address[]>([])
  const router = useRouter()

  function openProfile(address: Address) {
    return () => router.push(`/profile/${address}`)
  }

  useEffect(() => {
    const recentWallets = getRecentWallets()
    setWallets(recentWallets)
  }, [])

  return (
    <div className='grid gap-2'>
      {wallets.length > 0 ? (
        <>
          <h3 className='font-semibold text-foreground/60'>Recent Searches</h3>
          <span className='grid items-center justify-center gap-3 lg:flex'>
            {wallets.map((wallet, index) => (
              <button
                onClick={openProfile(wallet)}
                className='cursor-pointer rounded-[0.5rem] border border-accent/20 px-4 py-2 duration-200 hover:border-accent/70 hover:bg-accent/10 max-sm:w-full'
                key={index}
              >
                {formatAddress(wallet)}
              </button>
            ))}
          </span>
        </>
      ) : null}
    </div>
  )
}
