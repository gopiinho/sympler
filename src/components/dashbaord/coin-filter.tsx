'use client'
import { IoFilterOutline } from 'react-icons/io5'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

export default function CoinFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const toggleFilter = (filterName: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (params.has(filterName)) {
      params.delete(filterName)
    } else {
      params.set(filterName, 'true')
    }

    return `${pathname}?${params.toString()}`
  }

  const handleFilterClick = (filterName: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const newUrl = toggleFilter(filterName)
    router.push(newUrl)
  }

  const isFilterActive = (filterName: string) => searchParams.has(filterName)

  return (
    <div>
      <div className='flex items-center justify-end border-t-[0.4px] border-primary/20 text-sm ~gap-2/6 ~px-4/6 ~py-4/6'>
        <div className='flex items-center ~gap-2/8'>
          <IoFilterOutline />
          <button
            onClick={handleFilterClick('percent')}
            className={`rounded-md border py-1 duration-200 ~px-3/4 hover:bg-muted ${
              isFilterActive('percent')
                ? 'border-accent/50 bg-muted'
                : 'border-primary/50'
            }`}
          >
            Holding
          </button>
          <button
            onClick={handleFilterClick('zero')}
            className={`rounded-md border py-1 duration-200 ~px-3/4 hover:bg-muted ${
              isFilterActive('zero')
                ? 'border-accent/50 bg-muted'
                : 'border-primary/50'
            }`}
          >
            Small Balances
          </button>
          <button
            onClick={handleFilterClick('spam')}
            className={`rounded-md border py-1 duration-200 ~px-3/4 hover:bg-muted ${
              isFilterActive('spam')
                ? 'border-accent/50 bg-muted'
                : 'border-primary/50'
            }`}
          >
            Spam
          </button>
        </div>
      </div>
    </div>
  )
}
