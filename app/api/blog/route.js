import { connectDB } from "@/lib/config/db";
import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import { NextResponse } from "next/server";
import BlogModel from "@/lib/models/BlogModel";
import { blog_data } from "@/assets/assets";
const fs = require('fs')


const loadDB = async () => {
  await connectDB();
};

loadDB();

export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get("id");
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);

    }
    else{
     const blogs = await BlogModel.find({});
     return NextResponse.json({blogs});
    }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    if (!image || typeof image.arrayBuffer !== 'function') {
      return NextResponse.json({ success: false, msg: 'Invalid or missing image' }, { status: 400 });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    const imageDir = './public/uploads';
    if (!existsSync(imageDir)) mkdirSync(imageDir, { recursive: true });

    const filePath = `${imageDir}/${timestamp}_${image.name}`;
    await writeFile(filePath, buffer);

    const imageUrl = `/uploads/${timestamp}_${image.name}`;

    const blogData = {
      title: formData.get('title') || '',
      description: formData.get('description') || '',
      category: formData.get('category') || '',
      author: formData.get('author') || '',
      image: imageUrl,
      authorImg: formData.get('authorImg') || ''
    };    

    await BlogModel.create(blogData);
    console.log("Blog Saved:", blogData);

    return NextResponse.json({ success: true, msg: "Blog Added" });

  } catch (error) {
    console.error("POST /api/blog Error:", error);
    return NextResponse.json({ success: false, msg: "Internal Server Error" }, { status: 500 });
  }
}


//Creating API Endpoint to delete blog

export async function DELETE(request){
  const id = await request.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public ${blog.image}`, ()=>{});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({msg:"Blog Deleted"})
}