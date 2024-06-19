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

export default function CoinDisplay({
  name,
  symbol,
  balance,
  logo,
}: CoinDisplayProps) {
  const truncatedName = name ? truncateString(name, 20) : null
  const truncatedSymbol = symbol ? truncateString(symbol, 10) : null

  return (
    <div className='flex w-full justify-between duration-100 ~px-3/8 ~py-3/6 hover:cursor-pointer hover:bg-slate-100'>
      <div className='flex items-center justify-center gap-2'>
        <span className='font-semibold ~text-base/lg'>{truncatedName}</span>
        <span className='text-primary/50 ~text-sm/base'>{truncatedSymbol}</span>
      </div>
      <div className='grid gap-1 text-end'>
        <span className='text-primary/50 ~text-xs/sm'>Amount</span>
        {balance === undefined ? (
          'loading'
        ) : (
          <div className='flex justify-end font-semibold ~text-base/lg'>
            {nFormatter(Number(balance))}
          </div>
        )}
      </div>
    </div>
  )
}
