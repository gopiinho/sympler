'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Address } from 'viem'

export default function WalletSearch() {
  const [address, setAddress] = useState<string | Address>('')
  const [isLoadingProfile, setIsLoadingProfile] = useState(false)
  const router = useRouter()

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value as Address)
  }

  const openProfile = () => {
    setIsLoadingProfile(true)
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
        className='h-10 w-10 items-center justify-center rounded-r-[0.5rem] bg-primary text-center text-xl text-background shadow-lg shadow-primary/50 duration-200 ~px-2/3 ~py-1/2 hover:text-accent'
      >
        {isLoadingProfile ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
              opacity='0.25'
            />
            <circle cx='12' cy='2.5' r='1.5' fill='currentColor'>
              <animateTransform
                attributeName='transform'
                dur='0.75s'
                repeatCount='indefinite'
                type='rotate'
                values='0 12 12;360 12 12'
              />
            </circle>
          </svg>
        ) : (
          <MdOutlineArrowRightAlt />
        )}
      </button>
    </div>
  )
}
