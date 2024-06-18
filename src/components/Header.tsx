import React from 'react'
import { LinkComponent } from './LinkComponent'
import { Connect } from './Connect'
import Link from 'next/link'

export function Header() {
  return (
    <header className='xl:w-[15%] py-2 xl:py-4 flex xl:flex-col justify-between border-[0.4px] border-foreground items-center rounded-r-2xl'>
      <LinkComponent href='/'>
        <h1 className='text-2xl xl:text-[3rem] font-semibold leading-none'>symple</h1>
      </LinkComponent>
      <div className='xl:flex items-center justify-center'>
        <Connect />
      </div>
    </header>
  )
}
