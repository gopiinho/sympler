'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { formatAddress } from '@/utils/formatters'
import etherscanLogo from '../../../public/assets/logos/etherscan.svg'

function ensureString(value: string | string[]): string {
  return Array.isArray(value) ? value[0] : value
}

export default function Profile() {
  const { address } = useParams()
  const displayAddress: string = ensureString(address)

  return (
    <div className='flex gap-4'>
      <div className='flex flex-col'>
        <div className='flex gap-2 py-1 font-semibold text-foreground ~text-xl/4xl'>
          <span>{formatAddress(displayAddress)}</span>
          {/* <span className='h-6 w-6'>
            <Image
              src={etherscanLogo}
              alt='etherscan logo'
              width={24}
              height={24}
            />
          </span> */}
        </div>
      </div>
    </div>
  )
}
