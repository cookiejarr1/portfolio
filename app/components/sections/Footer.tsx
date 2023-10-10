import React from 'react'
import { Link } from '@nextui-org/react'

export default function Footer() {
  return (
    <div className="flex flex-col bg-primary">
      <div className='px-40 py-7 '>
        <div className=''>
          <Link isExternal color="foreground" href="https://orteil.dashnet.org/cookieclicker/" underline="hover">cookie</Link>
          .org is a personal platform for showcasing my skills and passion for programming.
        </div>
        <div>Copyright ©2013-2021 cookie.org.</div>
        <div>All Rights Reserved.</div>
      </div>
    </div>
  )
}