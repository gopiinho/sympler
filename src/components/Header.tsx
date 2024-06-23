import React from 'react'
import { LinkComponent } from './LinkComponent'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'

export function Header() {
  return (
    <header className='mx-auto flex w-full items-center justify-between gap-4 border-b-[0.04px] border-foreground ~py-4/5 max-lg:max-h-20 lg:w-[15%] lg:flex-col lg:rounded-r-2xl lg:border-[0.4px]'>
      <LinkComponent href='/'>
        <h1 className='font-semibold ~text-2xl/5xl'>sympler</h1>
      </LinkComponent>
      {/* <div className='hidden items-start text-xl font-semibold lg:grid'>
        <Link
          href={'/portfolio'}
          className='flex items-center gap-2 text-start text-foreground/80 duration-100 hover:text-foreground'
        >
          <HiWallet size={17} />
          Portfolio
        </Link>
        <Link
          href={'/'}
          className='flex items-center gap-2 text-start text-foreground/80 duration-100 hover:text-foreground'
        >
          <FaUser size={17} />
          Profile
        </Link>
      </div> */}
      <div className='text-bold flex flex-col gap-2'>
        <span>beta v0.1</span>
        <div className='flex justify-between gap-2'>
          <LinkComponent href='https://x.com/_sympler'>
            <FaXTwitter />
          </LinkComponent>
          <LinkComponent href='https://github.com/gopiinho/sympler'>
            <FaGithub />
          </LinkComponent>
        </div>
      </div>
    </header>
  )
}
