import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { PropsWithChildren } from 'react'
import {
  SITE_DESCRIPTION,
  SITE_INFO,
  SITE_NAME,
  SITE_URL,
  SOCIAL_TWITTER,
} from '@/utils/site'
import Layout from '@/components/layout'
import Web3Provider from '@/context/web3'
import { cookieToInitialState } from 'wagmi'
import { WALLETCONNECT_CONFIG } from '@/utils/web3'
import { headers } from 'next/headers'
import '../assets/globals.css'

const nats = localFont({
  src: '../../public/fonts/nats.ttf',
  display: 'swap',
  variable: '--font-nats',
})

const trap = localFont({
  src: '../../public/fonts/trap.otf',
  display: 'swap',
  variable: '--font-trap',
})

const inter = localFont({
  src: '../../public/fonts/inter.ttf',
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} · ${SITE_INFO}`,
    template: `${SITE_NAME} · %s`,
  },
  metadataBase: new URL(SITE_URL),
  description: SITE_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    title: SITE_NAME,
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    type: 'website',
    title: SITE_NAME,
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: '/opengraph-image',
  },
  twitter: {
    card: 'summary_large_image',
    site: SOCIAL_TWITTER,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: '/opengraph-image',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1.0,
  viewportFit: 'cover',
  themeColor: '#000000',
}

export default function RootLayout(props: PropsWithChildren) {
  const initialState = cookieToInitialState(
    WALLETCONNECT_CONFIG,
    headers().get('cookie')
  )

  return (
    <html
      lang='en'
      className={`${nats.variable} ${trap.variable} ${inter.variable}`}
    >
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='font-trap'>
        <Web3Provider initialState={initialState}>
          <Layout>{props.children}</Layout>
        </Web3Provider>
      </body>
    </html>
  )
}
