import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/public/assets/assets'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <div className='flex flex-col ml-30 mr-20 mt-10 mb-5 justify-between gap-2 items-center sm:flex-row'>
      <Link href="/">
      <Image src={assets.logo} alt='logo' width={128} height={38}></Image>
      </Link>
      <h2>2025 Evently. All Rights reserved</h2>
    </div>
  )
}

export default Footer