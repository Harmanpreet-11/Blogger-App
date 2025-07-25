import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.blogger_light} alt='' width={130}/>
        <p className='text-sm text-white'>All right reserved. Copyright @blogger</p>
        <div className='flex'>
          <Image className='cursor-pointer' src={assets.facebook_icon}alt='Facebook' width={40} />
          <Image className='cursor-pointer' src={assets.twitter_icon}alt='Twitter' width={40} />
          <Image className='cursor-pointer' src={assets.googleplus_icon}alt='Google' width={40} />

        </div>
    </div>
  )
}

export default Footer