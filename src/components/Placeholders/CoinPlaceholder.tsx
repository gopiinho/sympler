export default function CoinPlaceholder() {
  return (
    <div className='flex w-full justify-between px-2 py-4 duration-100 hover:cursor-pointer hover:bg-slate-100 sm:py-6 lg:px-8'>
      <div className='flex items-center justify-center gap-2'>
        <span className='h-6 w-20 animate-pulse rounded-3xl bg-foreground/40' />
        <span className='h-6 w-10 animate-pulse rounded-3xl bg-foreground/40' />
      </div>
      <div className='grid gap-1 text-end'>
        <span className='text-xs text-primary/50'>Amount</span>
        <span className='h-6 w-10 animate-pulse rounded-3xl bg-foreground/40' />
      </div>
    </div>
  )
}
