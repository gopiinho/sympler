import React from 'react'
import { SITE_INFO, SOCIAL_GITHUB, SOCIAL_TWITTER } from '@/utils/site'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { NetworkStatus } from './network-status'
import { LinkComponent } from './link-component'

export function Footer() {
  return (
    <>
      {/* <div className='place-self-end'>
        <NetworkStatus />
      </div> */}

      <footer className='footer bg-neutral text-neutral-content sticky top-[100vh] flex items-center justify-between p-4'>
        <p>{SITE_INFO}</p>
        <div className='flex gap-4'>
          <LinkComponent href={`https://github.com/${SOCIAL_GITHUB}`}>
            <FaGithub />
          </LinkComponent>
          <LinkComponent href={`https://twitter.com/${SOCIAL_TWITTER}`}>
            <FaXTwitter />
          </LinkComponent>
        </div>
      </footer>
    </>
  )
}
