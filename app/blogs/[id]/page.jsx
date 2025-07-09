"use client"
import { assets, blog_data } from '@/assets/assets';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  const [data, setData] = useState([]);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog', {
      params: {
        id: params.id
      }
    })
    setData(response.data);
  }

  useEffect(() => {
    fetchBlogData();
  }, [])


  return (data ? <>
    <div className='bg-white py-5 px-5 md:px-12 lg:px-28'>

      <div className="flex items-center justify-between w-full mt-2">
        <Image
          src={assets.blogger_logo}
          alt="Logo"
          className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[130px]"
        />

        <button className="flex items-center gap-2 font-medium text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2 border border-black shadow-[-7px_7px_0px_#000000] cursor-pointer ">
          Get Started
          <Image src={assets.arrow} alt="Arrow" className="w-4 h-4" />
        </button>
      </div>

      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full'    src={data.authorImg || assets.profile_icon} alt="Author"   width={60} height={60} />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image className='border-4 border-black' src={data.image} width={1280} height={720} alt='Blog Image' />

      <div className='blog-content' dangerouslySetInnerHTML={{ __html: data.description }}></div>

      <div className="my-24">
        <p className="text-black font-semibold my-4">Share this article on Social Media</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} width={50} alt='Facebook Icon' />
          <Image src={assets.twitter_icon} width={50} alt='Twitter Icon' />
          <Image src={assets.googleplus_icon} width={50} alt='Google + Icon' />
        </div>
      </div>
    </div>
    <Footer />
  </> : <></>
  )
}

export default page