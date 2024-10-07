'use client'
import Image from 'next/image'
import { SlArrowRight } from 'react-icons/sl'
import { useChainStore } from '@/context/chain'
import { useBalanceStore } from '@/context/balance-store'
import { chainConfigs } from '@/utils/chainConfig'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState, useEffect } from 'react'

export default function ChainSwitcher() {
  const { refetchFunction } = useBalanceStore()
  const { currentChain, setCurrentChain, isHydrated } = useChainStore()
  const [selectedChain, setSelectedChain] = useState(currentChain)

  useEffect(() => {
    if (isHydrated) {
      setSelectedChain(currentChain)
    }
  }, [isHydrated, currentChain])

  const currentChainConfig = chainConfigs.find(
    (config) => config.id === selectedChain
  )

  const handleChainChange = (chainId: string) => {
    setCurrentChain(chainId)
    setSelectedChain(chainId)
    if (refetchFunction) {
      refetchFunction()
    } else {
      console.error('Cannot Refetch')
    }
  }

  if (!isHydrated || !currentChainConfig) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className='flex w-full items-center justify-between gap-3 rounded-md border border-input duration-200 ~text-base/xl ~px-2/4 ~py-1/2 hover:opacity-80 max-lg:m-auto max-lg:h-8'>
          <div className='flex gap-2'>
            <Image
              src={currentChainConfig.logo}
              width={20}
              height={20}
              alt='Chain logo'
            />
            <span className='hidden sm:flex'>{currentChainConfig.name}</span>
          </div>
          <SlArrowRight className='hidden sm:flex' size={10} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-background'>
        {chainConfigs.map((chain) => (
          <DropdownMenuItem
            key={chain.id}
            onClick={() => handleChainChange(chain.id)}
            className={`flex w-full items-center gap-2 ~px-2/4 ~py-1/2 ${chain.id === selectedChain ? 'opacity-50' : ''}`}
          >
            <Image
              src={chain.logo}
              width={20}
              height={20}
              alt={`${chain.name} logo`}
            />
            <span>{chain.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
