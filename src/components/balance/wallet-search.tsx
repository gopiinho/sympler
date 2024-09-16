'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Address } from 'viem'
import { validateAddress } from '@/utils/helpers/validations'

export default function WalletSearch() {
  const [address, setAddress] = useState<string | Address>('')
  const [error, setError] = useState<boolean>(false)
  const [isLoadingProfile, setIsLoadingProfile] = useState(false)
  const router = useRouter()

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value as Address)
    setError(false)
  }

  const storeAddressInLocalStorage = (address: string | Address) => {
    const addresses = JSON.parse(
      localStorage.getItem('recentAddresses') || '[]'
    )
    if (!addresses.includes(address)) {
      addresses.unshift(address)
      if (addresses.length > 3) addresses.pop()
    }
    localStorage.setItem('recentAddresses', JSON.stringify(addresses))
  }

  const openProfile = () => {
    const isValidAddress = validateAddress(address)
    if (isValidAddress) {
      setError(false)
      setIsLoadingProfile(true)
      storeAddressInLocalStorage(address)
      router.push(`/profile/${address}`)
    } else {
      setError(true)
    }
  }

  return (
    <div className='relative'>
      <div className='flex gap-1'>
        <input
          className={`h-10 rounded-l-[0.5rem] border text-center text-sm outline-0 duration-300 ~w-72/[27rem] ~px-4/8 ~py-2/3 ${
            error
              ? 'border-percentRed/80 shadow-lg shadow-percentRed/80 hover:border-percentRed'
              : 'border-accent/50 shadow-lg shadow-accent/50 hover:border-accent'
          }`}
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
    </div>
  )
}
