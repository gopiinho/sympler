import { nFormatter, formatPrice } from '@/utils/formatters'
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
  usd_price,
  balance,
  usd_value,
  usd_price_24hr_percent_change,
  logo,
}: CoinDisplayProps) {
  const shortName = name ? truncateString(name, 20) : null
  const shortSymbol = symbol ? truncateString(symbol, 10) : null

  return (
    <div className='flex w-full justify-between duration-100 ~px-3/8 ~py-3/6 hover:cursor-pointer hover:bg-secondary'>
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
      <div className='flex justify-between ~gap-6/12 xl:w-[50%]'>
        <div className='hidden w-24 gap-1 text-end xl:grid'>
          <span className='text-primary/50 ~text-xs/sm'>Price USD</span>
          {usd_price === null ? (
            '-'
          ) : (
            <div className='flex justify-end ~text-base/xl'>
              {formatPrice(usd_price)}
            </div>
          )}
        </div>
        <div className='hidden w-24 gap-1 text-end xl:grid'>
          <span className='text-primary/50 ~text-xs/sm'>24h</span>
          {usd_price_24hr_percent_change === null ||
          usd_price_24hr_percent_change === undefined ? (
            '-'
          ) : (
            <div
              className={`flex justify-end ~text-base/xl ${
                usd_price_24hr_percent_change < 0
                  ? 'text-percentRed'
                  : 'text-percentGreen'
              }`}
            >
              {usd_price_24hr_percent_change > 0 ? '+' : ''}
              {usd_price_24hr_percent_change.toFixed(2)}%
            </div>
          )}
        </div>
        <div className='grid w-20 gap-1 text-end'>
          <span className='text-primary/50 ~text-xs/sm'>Amount</span>
          {balance === null ? (
            '-'
          ) : (
            <div className='flex justify-end ~text-base/xl'>
              {nFormatter(Number(balance))}
            </div>
          )}
        </div>
        <div className='grid w-20 gap-1 text-end'>
          <span className='text-primary/50 ~text-xs/sm'>Value</span>
          {usd_value === null ? (
            '-'
          ) : (
            <div className='flex justify-end ~text-base/xl'>
              ${usd_value?.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
