import Profile from './profile'
import TotalBalance from '../balance/total-balance'

export default function ProfileSection() {
  return (
    <div className='flex h-full w-full items-center justify-between gap-4 ~p-4/6'>
      <div className='grid'>
        <h4 className='font-nats text-foreground/80 ~text-lg/xl'>Profile</h4>
        <Profile />
      </div>
      <TotalBalance />
    </div>
  )
}
