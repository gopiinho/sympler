'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Address } from 'viem'

export default function WalletSearch() {
  const [address, setAddress] = useState<string | Address>('')
  const router = useRouter()

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value as Address)
  }

  const openProfile = () => {
    router.push(`/profile/${address}`)
  }

  return (
    <div className='flex gap-1'>
      <input
        className='h-10 rounded-l-[0.5rem] border border-accent/50 text-center text-base shadow-lg shadow-accent/50 outline-0 duration-200 ~w-72/[27rem] ~px-4/8 ~py-2/3 hover:border-accent'
        placeholder='Track any wallet address or ENS name'
        onChange={handleChangeInput}
        value={address}
      />
      <button
        onClick={openProfile}
        className='rounded-r-[0.5rem] bg-primary text-xl text-background shadow-lg shadow-primary/50 duration-200 ~px-2/3 ~py-1/2 hover:text-accent'
      >
        <MdOutlineArrowRightAlt />
      </button>
    </div>
  )
}
