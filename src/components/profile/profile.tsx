'use client'
import { useParams } from 'next/navigation'
import { formatAddress } from '@/utils/formatters'

function ensureString(value: string | string[]): string {
  return Array.isArray(value) ? value[0] : value
}

export default function Profile() {
  const { address } = useParams()
  const displayAddress: string = ensureString(address)

  return (
    <div className='flex gap-4'>
      <div className='flex flex-col gap-1'>
        <div className='py-1 font-black text-foreground ~text-xl/4xl'>
          {formatAddress(displayAddress)}
        </div>
      </div>
    </div>
  )
}
