import React from 'react'
import { LinkComponent } from './link-component'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { ThemeToggle } from './ui/theme-toggle'

import ChainSwitcher from './chain-switcher'

export function Navbar() {
  return (
    <header className='mx-auto flex w-full items-center justify-between gap-4 border-b-[0.04px] border-primary/50 font-nats ~py-4/5 max-lg:max-h-20 max-lg:px-4 lg:w-[15%] lg:flex-col lg:rounded-r-2xl lg:border-[0.4px]'>
      <LinkComponent href='/'>
        <h1 className='font-semibold duration-200 ~text-2xl/5xl hover:text-accent'>
          sympler
        </h1>
      </LinkComponent>
      <div className='flex gap-3 lg:grid lg:w-full lg:px-4'>
        <ChainSwitcher />
        <div className='text-bold flex h-14 items-center gap-4 lg:w-full lg:justify-between'>
          <div className='grid h-full items-center justify-between'>
            <div className='flex justify-between gap-2'>
              <LinkComponent
                href='https://x.com/_sympler'
                className='duration-200 hover:text-accent'
              >
                <FaXTwitter />
              </LinkComponent>
              <LinkComponent
                href='https://github.com/gopiinho/sympler'
                className='duration-200 hover:text-accent'
              >
                <FaGithub />
              </LinkComponent>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
