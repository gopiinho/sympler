import { isAddress, Address } from 'viem'

export function validateAddress(address: Address | string): boolean {
  const isValid = isAddress(address)
  return isValid
}
