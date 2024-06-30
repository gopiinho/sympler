import { formatEther } from 'viem'

// format wei units to readable with fixed decimals
export const formatBalance = (balance: bigint, toFixed?: number) => {
  if (!balance) return undefined
  return parseFloat(formatEther(balance, 'wei')).toFixed(toFixed ?? 4)
}

// split the address
export function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function nFormatter(num: number, round: number = 2): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(round).replace(/\.0$/, '') + 'G'
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(round).replace(/\.0$/, '') + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(round).replace(/\.0$/, '') + 'K'
  }
  if (num < 1000) {
    return num.toFixed(round)
  }
  return num.toString()
}

export function truncateMiddle(text: string, length: number = 5) {
  if (text?.length > length * 2 + 1) {
    return `${text.substring(0, length)}...${text.substring(text.length - length, text.length)}`
  }

  return text
}

export function formatPrice(price: number | undefined): string {
  if (price === null || price === undefined) return '-'
  if (price === 0) return '$0.00'
  if (price < 0.000001) {
    return `$${price.toExponential(2)}`
  }
  if (price < 0.01) {
    return `$${price.toFixed(6)}`
  }
  if (price < 1) {
    return `$${price.toFixed(4)}`
  }
  return `$${price.toFixed(2)}`
}
