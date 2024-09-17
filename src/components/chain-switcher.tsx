'use client'
import Image from 'next/image'
import { SlArrowRight } from 'react-icons/sl'
import { useChainStore } from '@/context/chain'
import { chainConfigs } from '@/utils/chainConfig'

export default function ChainSwitcher() {
  const { currentChain, setCurrentChain, isHydrated } = useChainStore()
  const currentChainConfig = chainConfigs.find(
    (config) => config.id === currentChain
  )

  const handleChainChange = () => {
    const currentIndex = chainConfigs.findIndex(
      (config) => config.id === currentChain
    )
    const nextIndex = (currentIndex + 1) % chainConfigs.length
    setCurrentChain(chainConfigs[nextIndex].id)
  }

  if (!isHydrated || !currentChainConfig) return null

  return (
    <button
      onClick={handleChainChange}
      className='flex items-center justify-between gap-3 rounded-md border border-input duration-200 ~text-base/xl ~px-2/4 ~py-1/2 hover:opacity-80 max-lg:m-auto max-lg:h-8'
    >
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
  )
}
