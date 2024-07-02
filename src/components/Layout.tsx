import React, { PropsWithChildren } from 'react'
import { Header } from './Header'
import { ThemeProvider } from './ThemeProvider'

export function Layout(props: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <div className='grid lg:flex lg:h-[100dvh]'>
        <Header />
        <main className='flex-grow'>{props.children}</main>
      </div>
    </ThemeProvider>
  )
}
