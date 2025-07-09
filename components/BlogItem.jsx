import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const BlogItem = ({ title, description, category, image, id, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='max-w-[330px] sm:max-w-[300px] bg-white/80 backdrop-blur border border-black shadow-lg rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl'
    >
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt='Image'
          width={400}
          height={400}
          className='border-b border-black rounded-t-xl object-cover transition-transform duration-300 hover:scale-105 hover:brightness-90'
        />
      </Link>
      <p className='ml-5 mt-5 px-3 py-1 inline-block rounded-full bg-black text-white text-xs tracking-wide uppercase'>
        {category}
      </p>
      <div className="p-2">
        <h5 className='mb-2 text-lg font-semibold tracking-tight text-gray-900'>{title}</h5>
        <p className='hidden md:block mb-3 text-sm tracking-tight text-gray-700' dangerouslySetInnerHTML={{__html:description.slice(0,120)}}></p>
        <Link href={`/blogs/${id}`}>
          <div className='mb-0  inline-flex m-auto items-center py-2 font-semibold text-center cursor-pointer group'>
            Read more
            <Image src={assets.arrow} className='ml-3 transition-transform duration-300 group-hover:translate-x-2' alt='Arrow' />
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export default BlogItem
