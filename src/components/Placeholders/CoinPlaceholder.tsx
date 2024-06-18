export default function CoinPlaceholder() {
  return (
    <div className='w-full flex justify-between px-2 py-4 xl:px-8 sm:py-6 hover:cursor-pointer hover:bg-slate-100 duration-100'>
      <div className='flex gap-2 justify-center items-center'>
        <span className='w-20 h-6 bg-foreground/40 rounded-3xl animate-pulse' />
        <span className='w-10 h-6 bg-foreground/40 rounded-3xl animate-pulse' />
      </div>
      <div className='grid text-end gap-1'>
        <span className='text-xs text-primary/50'>Amount</span>
        <span className='w-10 h-6 bg-foreground/40 rounded-3xl animate-pulse' />
      </div>
    </div>
  )
}
