import WalletSearch from '@/components/balance/wallet-search'

export default function Home() {
  return (
    <div className='font-inter flex h-full w-full flex-col content-center items-center justify-center gap-8 py-10 text-center ~px-4/8'>
      <div className='grid gap-6'>
        <h1 className='select-none font-nats font-semibold leading-[0.6] ~text-5xl/[7rem]'>
          Simplest portfolio <br /> manager
        </h1>
        <p className='font-light text-primary/60 ~text-base/lg'>
          Track your token balances, wallet valuation with easy to use platform
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
