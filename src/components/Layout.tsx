import React, { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout(props: PropsWithChildren) {
  return (
    <div className='grid lg:flex lg:h-[100dvh]'>
      <Header />
      <main className='flex-grow'>{props.children}</main>
    </div>
  )
}
