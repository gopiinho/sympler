import { nFormatter } from '@/utils/formatters'

interface CoinDisplayProps {
  name: string | null
  symbol: string | null
  balance: string | null
  logo?: any
}

function truncateString(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...'
  }
  return str
}

export default function CoinDisplay({ name, symbol, balance, logo }: CoinDisplayProps) {
  const truncatedName = name ? truncateString(name, 20) : null
  const truncatedSymbol = symbol ? truncateString(symbol, 10) : null

  return (
    <div className='w-full flex justify-between px-2 py-4 xl:px-8 sm:py-6 hover:cursor-pointer hover:bg-slate-100 duration-100'>
      <div className='flex gap-2 justify-center items-center'>
        <span className='text-xl font-semibold'>{truncatedName}</span>
        <span className='text-primary/50'>{truncatedSymbol}</span>
      </div>
      <div className='grid text-end gap-1'>
        <span className='text-xs text-primary/50'>Amount</span>
        {balance === undefined ? 'loading' : <div className='flex font-semibold'>{nFormatter(Number(balance))}</div>}
      </div>
    </div>
  )
}
