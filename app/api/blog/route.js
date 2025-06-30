import { connectDB } from "@/lib/config/db";
import blogModel from "@/lib/models/BlogModel";
import {writeFile} from 'fs/promises'
const { NextResponse } = require("next/server");

const loadDB = async () => {
    await connectDB();
}

loadDB();

export async function GET(request){
        
    return NextResponse.json({msg:"api working"})
}

export async function POST(request){

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imageUrl=`/${timestamp}_${image.name}`;
 
    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('catergory')}`,
        author:`${formData.get('author')}`,
        image:`${imageUrl}`,
        authorImg:`${formData.get('authorImg')}`
    }

    await blogModel.create(blogData);
    console.log("Blog Saved");
    
    return NextResponse.json({success:true,msg:"Blog Added"})    
}