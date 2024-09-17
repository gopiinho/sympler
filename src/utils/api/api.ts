import { axiosMoralisInstance } from './axios'
import { WalletTokenInfoResponseType } from '@/types/token'

export const getWalletTokenInfo = async (
  address: string,
  chain: string
): Promise<WalletTokenInfoResponseType> => {
  const response = await axiosMoralisInstance.get<WalletTokenInfoResponseType>(
    `/wallets/${address}/tokens`,
    {
      params: { chain },
    }
  )
  return response.data
}
