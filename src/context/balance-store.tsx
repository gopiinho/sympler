import { create } from 'zustand'

type BalanceStoreType = {
  totalBalance: number
  setTotalBalance: (balance: number) => void
  isLoadingBalance: boolean
  setLoadingBalance: (value: boolean) => void
  refetchFunction: (() => void) | null
  setRefetchFunction: (refetch: () => void) => void
}

export const useBalanceStore = create<BalanceStoreType>((set) => ({
  totalBalance: 0,
  setTotalBalance: (balance) => set({ totalBalance: balance }),
  isLoadingBalance: true,
  setLoadingBalance: (value) => set({ isLoadingBalance: value }),
  refetchFunction: null,
  setRefetchFunction: (refetch) => set({ refetchFunction: refetch }),
}))
