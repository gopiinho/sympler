'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Address } from 'viem'

export default function WalletSearch() {
  const [address, setAddress] = useState<string | Address>('')
  const { push } = useRouter()

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value as Address)
  }

  return (
    <div className='flex gap-1'>
      <input
        className='h-10 rounded-l-[0.5rem] text-center shadow-md shadow-primary/50 ~w-80/[27rem] ~px-4/8 ~py-2/3'
        placeholder='Track any wallet address or ENS name'
        onChange={handleChangeInput}
        value={address}
      />
      <button
        onClick={() => push(`/profile/${address}`)}
        className='rounded-r-[0.5rem] bg-primary text-xl text-background shadow-md shadow-primary/50 ~px-2/3 ~py-1/2'
      >
        <MdOutlineArrowRightAlt />
      </button>
    </div>
  )
}
