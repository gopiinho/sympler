import { Address } from 'viem'
import axiosAlchemyInstance from './axios'
import axios from 'axios'

export const getUserTokens = async (user: Address) => {
  const data = {
    jsonrpc: '2.0',
    method: 'alchemy_getTokenBalances',
    params: [user],
    id: 1,
  }
  try {
    const response = await axiosAlchemyInstance.post('', data)
    return response['data']['result']
  } catch (error: any) {
    throw new Error(error.response?.data || 'Something went wrong')
  }
}
