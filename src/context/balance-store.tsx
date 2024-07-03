import { create } from 'zustand'

type BalanceStoreType = {
  totalBalance: number | null
  setTotalBalance: (balance: number) => void
}

export const useBalanceStore = create<BalanceStoreType>((set) => ({
  totalBalance: null,
  setTotalBalance: (balance) => set({ totalBalance: balance }),
}))
