'use client'
import { formatEther } from 'viem'

export const formatBalance = (balance: bigint, toFixed?: number) => {
  if (!balance) return undefined
  return parseFloat(formatEther(balance, 'wei')).toFixed(toFixed ?? 4)
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
