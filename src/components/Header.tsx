import React from 'react'
import { LinkComponent } from './LinkComponent'
import { Connect } from './Connect'
import Link from 'next/link'

export function Header() {
  return (
    <header className='flex items-center justify-between rounded-r-2xl border-[0.4px] border-foreground py-2 xl:w-[15%] xl:flex-col xl:py-4'>
      <LinkComponent href='/'>
        <h1 className='text-2xl font-semibold leading-none xl:text-[3rem]'>
          symple
        </h1>
      </LinkComponent>
      <div className='items-center justify-center xl:flex'>
        <Connect />
      </div>
    </header>
  )
}
