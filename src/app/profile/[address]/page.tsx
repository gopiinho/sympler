import { useRouter } from 'next/navigation'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import BalanceSeeker from '@/components/Balance/BalanceSeeker'

export default function Profile({ params }: { params: { address: Address } }) {
  return (
    <div>
      {params.address ? (
        <BalanceSeeker address={params.address} />
      ) : (
        'NO ADDRESS'
      )}
    </div>
  )
}
