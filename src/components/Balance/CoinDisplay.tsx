import { nFormatter } from '@/utils/formatters'

interface CoinDisplayProps {
  name: string | undefined
  symbol: string | undefined
  balance: string | undefined
}

export default function CoinDisplay({ name, symbol, balance }: CoinDisplayProps) {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex gap-2 justify-center items-center'>
        <span className='text-xl font-semibold'>{name}</span>
        <span className='text-primary/50'>{symbol}</span>
      </div>
      {balance === undefined ? 'loading' : <div className='flex font-semibold'>{nFormatter(Number(balance))}</div>}
    </div>
  )
}
