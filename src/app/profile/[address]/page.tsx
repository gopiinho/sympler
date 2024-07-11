import { Address } from 'viem'
import BalanceSeeker from '@/components/balance/balance-seeker'
import ProfileSection from '@/components/profile/profile-section'
import CoinFilter from '@/components/dashbaord/coin-filter'

export default function Profile({ params }: { params: { address: Address } }) {
  return (
    <div className='max-h-[100dvh] overflow-y-scroll'>
      {params.address ? (
        <>
          <ProfileSection />
          <CoinFilter />
          <BalanceSeeker address={params.address} />
        </>
      ) : (
        'NO ADDRESS'
      )}
    </div>
  )
}
