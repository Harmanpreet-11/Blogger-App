'use client';

import React, { useState } from 'react'
import { assets } from '@/assets/assets';
import Image from 'next/image';

const page = () => {

  const [image,setImage] = useState();
  
  return (
  <>
    <form className='pt-10 px-5 sm:px-12'>
          <p className='text-lg'>Upload Thumbnail</p>
          <label htmlFor="image">
            <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
          <p className='text-xl mt-4'>Blog title</p>
          <input className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder='Type here...' required/>
           <p className='text-xl mt-4'>Blog Description</p>
          <textarea className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder='Add decription...' rows={6} required/>
          <p className='text-xl mt-4'>Blog Category</p>
          <select className='w-40 mt-4 px-4 py-3 border text-gray-500' name="category"> 
            <option value="Startup">Startup</option>
            <option value="Technology">Technology</option>
            <option value="LifeStyle">LifeStyle</option>
          </select>
           <br/>
          <button className='mt-8 w-40 h-12 bg-black text-white' type='submit'>Add</button>
        </form>
      </>
  )
}

export default page