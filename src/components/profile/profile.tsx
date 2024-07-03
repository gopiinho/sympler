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
      {/* <div className='flex select-none items-center justify-center rounded-lg border-2 border-foreground bg-foreground/20 text-center text-3xl ~h-12/20 ~w-12/20'>
        {displayAddress.substring(0, 3)}
      </div> */}
      <div className='flex flex-col gap-1'>
        <div className='text-foreground/80 ~text-3xl/5xl'>
          {formatAddress(displayAddress)}
        </div>
      </div>
    </div>
  )
}
