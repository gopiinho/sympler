import { create } from 'zustand'

type BalanceStoreType = {
  totalBalance: number
  setTotalBalance: (balance: number) => void
}

export const useBalanceStore = create<BalanceStoreType>((set) => ({
  totalBalance: 0,
  setTotalBalance: (balance) => set({ totalBalance: balance }),
}))
