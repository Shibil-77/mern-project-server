require('dotenv').config()
import express  from "express";
import mongoose from "mongoose";
const app = express();


app.get('/',(req,res)=>{
   res.send("Hello world")
})

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log("DataBase Connect");
    app.listen(process.env.SERVER_PORT,()=>{
        console.log("server runing on port:",process.env.SERVER_PORT);
    })
})

