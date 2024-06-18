'use server'
import { Address } from 'viem'
import { getUserTokens } from './Api/api'

export const getUserTransactedAddress = async (user: Address) => {
  getUserTokens(user)
}
