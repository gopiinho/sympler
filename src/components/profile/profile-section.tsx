import Profile from './profile'

export default function ProfileSection() {
  return (
    <div className='grid h-full w-full gap-4 border-b-[0.4px] border-primary/50 p-6'>
      <h3 className='text-2xl'>Profile</h3>
      <Profile />
    </div>
  )
}
