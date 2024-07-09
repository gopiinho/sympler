import React from 'react'
import { LinkComponent } from './link-component'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { ThemeToggle } from './ui/theme-toggle'
import baseLogo from '../../public/assets/chains/base.svg'
import Image from 'next/image'
import { SlArrowRight } from 'react-icons/sl'

export function Navbar() {
  return (
    <header className='font-nats mx-auto flex w-full items-center justify-between gap-4 border-b-[0.04px] border-primary/50 ~py-4/5 max-lg:max-h-20 max-lg:px-4 lg:w-[15%] lg:flex-col lg:rounded-r-2xl lg:border-[0.4px]'>
      <LinkComponent href='/'>
        <h1 className='font-semibold duration-200 ~text-2xl/5xl hover:text-accent'>
          sympler
        </h1>
      </LinkComponent>
      <div className='flex gap-3 lg:grid lg:w-full lg:px-4'>
        <button
          disabled
          className='flex items-center justify-between gap-3 rounded-md border border-input duration-200 ~text-base/xl ~px-2/4 ~py-1/2 hover:cursor-not-allowed hover:opacity-80 max-lg:m-auto max-lg:h-8'
        >
          <div className='flex gap-2'>
            <Image src={baseLogo} width={20} height={20} alt='Chain logo' />
            <span className='hidden sm:flex'>Base</span>
          </div>
          <SlArrowRight className='hidden sm:flex' size={10} />
        </button>
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
