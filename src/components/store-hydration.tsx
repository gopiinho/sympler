'use client'
import { useEffect } from 'react'
import { useChainStore } from '@/context/chain'

export const StoreHydration = () => {
  const setIsHydrated = useChainStore((state) => state.setIsHydrated)

  useEffect(() => {
    setIsHydrated(true)
  }, [setIsHydrated])

  return null
}
