import WalletSearch from '@/components/Balance/WalletSearch'

export default function Home() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-8 px-8 py-10 text-center'>
      <div className='grid'>
        <h1 className='select-none font-semibold leading-none ~text-6xl/[6rem]'>
          Access Portfolio's
        </h1>
        <p className='text-primary/60 ~text-xl/4xl'>
          Track your token balances, wallet valuation with easy to use platform.
        </p>
      </div>
      <div className='mt-4 grid items-center gap-2'>
        <div>
          <button className='w-full rounded-[0.5rem] bg-primary text-background shadow-md shadow-primary/50 ~px-4/8 ~py-2/3'>
            Connect Wallet
          </button>
        </div>
        <span className='select-none text-foreground/50'>X</span>
        <div className='grid'>
          <WalletSearch />
        </div>
      </div>
    </div>
  )
}
