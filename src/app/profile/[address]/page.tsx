import { useRouter } from 'next/navigation'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import BalanceSeeker from '@/components/balance/balance-seeker'
import ProfileSection from '@/components/profile/profile-section'

export default function Profile({ params }: { params: { address: Address } }) {
  return (
    <div className='max-h-[100dvh] overflow-y-scroll'>
      {params.address ? (
        <>
          <ProfileSection />
          <BalanceSeeker address={params.address} />
        </>
      ) : (
        'NO ADDRESS'
      )}
    </div>
  )
}
