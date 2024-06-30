import Image from 'next/image'
import { nFormatter } from '@/utils/formatters'
import { TokenInfoType } from '@/types/token'

interface CoinDisplayProps extends Partial<TokenInfoType> {}

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
  usd_value,
  logo,
}: CoinDisplayProps) {
  const shortName = name ? truncateString(name, 20) : null
  const shortSymbol = symbol ? truncateString(symbol, 10) : null

  return (
    <div className='flex w-full justify-between duration-100 ~px-3/8 ~py-3/6 hover:cursor-pointer hover:bg-slate-100'>
      <div className='flex items-center justify-center gap-2'>
        <div className='hidden h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-foreground bg-foreground/20 sm:flex'>
          {logo ? (
            <>
              <img src={logo} alt='token logo'></img>
            </>
          ) : (
            <>{shortName?.substring(0, 1)}</>
          )}
        </div>
        <span className='font-semibold ~text-base/lg'>{shortName}</span>
        <span className='text-primary/50 ~text-sm/base'>{shortSymbol}</span>
      </div>
      <div className='flex justify-between ~gap-6/12 xl:w-[20%]'>
        <div className='grid gap-1 text-end'>
          <span className='text-primary/50 ~text-xs/sm'>Value</span>
          {usd_value === null ? (
            '-'
          ) : (
            <div className='flex justify-end font-semibold ~text-base/2xl'>
              ${usd_value?.toFixed(2)}
            </div>
          )}
        </div>
        <div className='grid gap-1 text-end'>
          <span className='text-primary/50 ~text-xs/sm'>Amount</span>
          {balance === null ? (
            '-'
          ) : (
            <div className='flex justify-end ~text-base/2xl'>
              {nFormatter(Number(balance))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
