import { SITE_INFO, SITE_NAME } from '@/utils/site'
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = SITE_NAME
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div tw='flex flex-col items-center justify-center w-full h-full text-white bg-dark text-light font-nats'>
        <h1 tw='text-8xl'>{SITE_NAME}</h1>
        <p tw='text-4xl'>{SITE_INFO}</p>
      </div>
    )
  )
}
