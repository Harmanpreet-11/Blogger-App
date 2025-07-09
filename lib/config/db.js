import mongoose from "mongoose";

export const connectDB = async () => {
   const MongoURL = process.env.MOONGOOSE_CONNECT;
   await mongoose.connect(MongoURL);
   console.log("connected");
   
}