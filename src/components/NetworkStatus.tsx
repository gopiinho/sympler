'use client'

import React from 'react'
import { useBlockNumber, useAccount } from 'wagmi'
import { GetNetworkColor } from '@/utils/network'
import { LinkComponent } from './LinkComponent'

export function NetworkStatus() {
  const block = useBlockNumber({ watch: true })
  const { chain } = useAccount()
  const explorerUrl = chain?.blockExplorers?.default.url
  const networkName = chain?.name ?? 'Ethereum'
  const color = GetNetworkColor(networkName, 'bgVariant')

  return (
    <div className='flex items-center gap-2 p-2'>
      <div className={`rounded-2xl px-4 py-1 text-foreground ${color}`}>
        {networkName}
      </div>
      {explorerUrl && (
        <LinkComponent href={explorerUrl}>
          <p className='text-xs'># {block.data?.toString()}</p>
        </LinkComponent>
      )}
      {!explorerUrl && <p className='text-xs'># {block.data?.toString()}</p>}
    </div>
  )
}
