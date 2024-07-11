import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 pb-2 pt-3 lg:px-10 max-sm:px-5 py-6'>
      <Link href="/" className="flex items-center gap-1">
        <Image 
          src="/icons/logo.svg"
          width={32}
          height={35}
          alt="inCast logo"
          className='max-sm:size-10 '
        />
        <Image 
          src="/icons/yoom-logo.png"
          width={90}
          height={20}
          alt="inCast logo"
          className=' max-sm:hidden pt-2'
        />
        
      </Link>
      <div className="flex flex-between gap-5">
        <SignedIn>
          <UserButton/>
        </SignedIn>
        
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar