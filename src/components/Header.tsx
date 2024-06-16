import React from 'react'
import { LinkComponent } from './LinkComponent'
import { SITE_EMOJI } from '@/utils/site'
import { Connect } from './Connect'
import Link from 'next/link'
export function Header() {
  return (
    <header className='navbar flex justify-between p-4'>
      <LinkComponent href='/'>
        <h1 className='text-[3rem] font-semibold leading-none'>coin tracker</h1>
      </LinkComponent>
      <div className='flex items-center justify-center'>
        <Connect />
      </div>
    </header>
  )
}
