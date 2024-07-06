import WalletSearch from '@/components/balance/wallet-search'

export default function Home() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-8 py-10 text-center ~px-4/8'>
      <div className='grid'>
        <h1 className='select-none font-semibold leading-none ~text-5xl/[7rem]'>
          <span>Symplify</span> your tokens
        </h1>
        <p className='text-primary/60 ~text-xl/2xl'>
          Track your token balances, wallet valuation with easy to use platform.
        </p>
      </div>
      <div className='mt-4 grid items-center gap-2'>
        <div className='grid'>
          <WalletSearch />
        </div>
      </div>
    </div>
  )
}
