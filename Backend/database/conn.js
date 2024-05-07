import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const url=process.env.MONGODB_CONNECTION_STRING;

try {

    mongoose.connect(url);
    const conn = mongoose.connection;

    conn.once('open', ()=>{
        console.log("database connected")
    })

} catch (error) {
    console.log(error);
}
