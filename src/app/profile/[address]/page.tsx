import { useRouter } from 'next/navigation'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import BalanceSeeker from '@/components/Balance/BalanceSeeker'
import ProfileSection from '@/components/Profile/ProfileSection'

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
