import React from 'react'
import { LinkComponent } from './LinkComponent'
import { Connect } from './Connect'
import Link from 'next/link'

export function Header() {
  return (
    <header className='flex items-center border-b-[0.04px] border-foreground p-2 py-2 max-lg:max-h-20 max-lg:py-3 lg:w-[15%] lg:flex-col lg:rounded-r-2xl lg:border-[0.4px] lg:py-4'>
      <LinkComponent href='/'>
        <h1 className='font-semibold ~text-2xl/5xl'>sympler</h1>
      </LinkComponent>
      {/* <div className='items-center justify-center lg:flex'>
        <Connect />
      </div> */}
    </header>
  )
}
