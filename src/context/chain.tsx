import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { chainConfigs, ChainConfig } from '@/utils/chainConfig'

type ChainStoreType = {
  currentChain: string
  setCurrentChain: (chain: string) => void
  availableChains: string[]
  isHydrated: boolean
  setIsHydrated: (state: boolean) => void
}

export const useChainStore = create<ChainStoreType>()(
  persist(
    (set) => ({
      currentChain: 'eth',
      setCurrentChain: (chain) => set({ currentChain: chain }),
      availableChains: chainConfigs.map((config) => config.id),
      isHydrated: false,
      setIsHydrated: (state) => set({ isHydrated: state }),
    }),
    {
      name: 'chain-storage',
      getStorage: () => localStorage,
    }
  )
)
