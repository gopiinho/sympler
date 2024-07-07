export default function CoinPlaceholder() {
  return (
    <div className='flex w-full justify-between px-2 py-4 duration-100 hover:cursor-pointer hover:bg-secondary sm:py-6 lg:px-8'>
      <div className='flex items-center justify-center gap-2'>
        <span className='h-6 w-20 animate-pulse rounded-md bg-foreground/40' />
        <span className='h-6 w-10 animate-pulse rounded-md bg-foreground/40' />
      </div>
      <div className='flex items-center justify-between ~gap-6/12 xl:w-[50%]'>
        <span className='hidden h-6 w-24 animate-pulse rounded-md bg-foreground/40 xl:flex' />
        <span className='hidden h-6 w-24 animate-pulse rounded-md bg-foreground/40 xl:flex' />
        <span className='grid h-6 w-20 animate-pulse rounded-md bg-foreground/40' />
        <span className='grid h-6 w-20 animate-pulse rounded-md bg-foreground/40' />
      </div>
    </div>
  )
}
