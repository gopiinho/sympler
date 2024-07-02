import React, { PropsWithChildren } from 'react'
import { Navbar } from './navbar'
import { ThemeProvider } from './theme-provider'

export function Layout(props: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <div className='grid lg:flex lg:h-[100dvh]'>
        <Navbar />
        <main className='flex-grow'>{props.children}</main>
      </div>
    </ThemeProvider>
  )
}
