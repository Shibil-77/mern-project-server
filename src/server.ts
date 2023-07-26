require('dotenv').config()
import express  from "express";
const app = express();


app.get('/',(req,res)=>{
   res.send("Hello world")
})

app.listen(process.env.SERVER_PORT,()=>{
    console.log("server runing on port:",process.env.SERVER_PORT);
})