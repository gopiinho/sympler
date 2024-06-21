export default function WalletSearch() {
  return (
    <div className='flex gap-1'>
      <input
        className='h-10 rounded-l-[0.5rem] text-center shadow-md shadow-primary/50 ~w-80/[30rem] ~px-4/8 ~py-2/3'
        placeholder='Track any wallet address or ENS name '
      />
      <button className='rounded-r-[0.5rem] bg-primary text-background shadow-md shadow-primary/50 ~px-2/3 ~py-1/2'>
        View
      </button>
    </div>
  )
}
