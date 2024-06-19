import React from 'react'
import { LinkComponent } from './LinkComponent'
import { Connect } from './Connect'
import Link from 'next/link'

export function Header() {
  return (
    <header className='flex items-center justify-between border-b-[0.04px] border-foreground p-2 py-2 max-lg:py-3 xl:w-[15%] xl:flex-col xl:rounded-r-2xl xl:border-[0.4px] xl:py-4'>
      <LinkComponent href='/'>
        <h1 className='font-semibold ~text-2xl/5xl'>symple</h1>
      </LinkComponent>
      <div className='items-center justify-center xl:flex'>
        <Connect />
      </div>
    </header>
  )
}
