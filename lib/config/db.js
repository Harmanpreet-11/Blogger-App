import mongoose from "mongoose";

export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://4uharmanpreet:password@harmanpreet.byfky49.mongodb.net/blog-app');
   console.log("connected");
   
}