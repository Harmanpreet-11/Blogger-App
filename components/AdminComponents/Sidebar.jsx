import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex max-h-screen flex-col border border-black bg-slate-100'>
      <div className="px-2 sm:pl-4 py-3 border border-black">
        <Image src={assets.blogger_admin_logo} width={100} alt=''/>
      </div>

      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className='w-[50%] sm:w-[80%] absolute right-0'>
        <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
          <Link href='/admin/addProduct'><Image src={assets.add_icon}alt='' width={28}/>
          <p>Add Blogs </p>
          </Link>
        </div>

        <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
          <Link href='/admin/blogList'><Image src={assets.blog_icon}alt='' width={28}/>
          <p> Blog Lists </p>
          </Link>
        </div>

        <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
          <Link href='/admin/subscriptions'><Image src={assets.email_icon}alt='' width={28}/>
          <p>Subscriptions </p>
          </Link>
        </div>
        </div>
      </div>
        
    </div>
  )
}

export default Sidebar


