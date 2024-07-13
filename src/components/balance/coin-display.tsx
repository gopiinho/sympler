import { nFormatter, formatPrice } from '@/utils/formatters'
import { TokenInfoType } from '@/types/token'
import { toFixedIfNecessary } from '@/utils/utils'
import { FaGasPump } from 'react-icons/fa6'

interface CoinDisplayProps extends Partial<TokenInfoType> {
  isPercentFilter: boolean
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
  usd_price,
  balance,
  usd_value,
  usd_price_24hr_percent_change,
  logo,
  portfolio_percentage,
  isPercentFilter,
  native_token,
}: CoinDisplayProps) {
  const shortName = name ? truncateString(name, 17) : null
  const shortSymbol = symbol ? truncateString(symbol, 10) : null

  return (
    <div className='group relative flex w-full justify-between duration-200 ~px-3/6 ~py-3/4 hover:bg-secondary/20'>
      <div className='flex items-center justify-center gap-2'>
        <div className='hidden h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-foreground bg-foreground/20 sm:flex'>
          {logo ? (
            <>
              <img src={logo} alt='token logo'></img>
            </>
          ) : (
            <>{shortName?.substring(0, 1)}</>
          )}
        </div>
        <span className='font-semibold ~text-sm/base'>{shortName}</span>
        <span className='text-primary/50 ~text-xs/base'>{shortSymbol}</span>
        {native_token ? (
          <span className='text-accent/50 duration-200 group-hover:text-accent'>
            <FaGasPump />
          </span>
        ) : null}
      </div>
      <div className='flex items-center justify-between ~gap-4/12 xl:w-[50%]'>
        <div className='hidden w-24 gap-1 text-end xl:grid'>
          {usd_price === null ? (
            '-'
          ) : (
            <div className='flex justify-end ~text-sm/base'>
              {formatPrice(usd_price)}
            </div>
          )}
        </div>
        <div className='hidden w-24 gap-1 text-end xl:grid'>
          {usd_price_24hr_percent_change === null ||
          usd_price_24hr_percent_change === undefined ? (
            '-'
          ) : (
            <div
              className={`flex items-center justify-end opacity-90 ~text-sm/base ${
                usd_price_24hr_percent_change < 0
                  ? 'text-percentRed'
                  : usd_price_24hr_percent_change > 0
                    ? 'text-percentGreen'
                    : 'text-foreground'
              }`}
            >
              {usd_price_24hr_percent_change > 0 ? '+' : ''}
              {toFixedIfNecessary(usd_price_24hr_percent_change, 2)}%
            </div>
          )}
        </div>
        <div className='grid gap-1 text-end ~w-16/20'>
          {balance === null ? (
            '-'
          ) : (
            <div className='flex justify-end ~text-sm/base'>
              {nFormatter(Number(balance))}
            </div>
          )}
        </div>
        <div className='grid w-20 gap-1 text-end'>
          {usd_value === null ? (
            '-'
          ) : (
            <div className='flex justify-end ~text-sm/base'>
              ${usd_value?.toFixed(2)}
            </div>
          )}
        </div>
      </div>
      {isPercentFilter ? (
        <span
          className='absolute inset-0 -z-20 h-full w-full rounded-r-md bg-accent/10 duration-300 group-hover:bg-accent/30'
          style={{ width: `${portfolio_percentage}%` }}
        />
      ) : null}
    </div>
  )
}
