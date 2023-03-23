import express, { Application } from "express"
import mongoose from "mongoose"

const port:number = 3455;
const app:Application = express()

const url :string = ""
mongoose.connect(url).then

const server = app.listen(port,()=>{
    console.log("");
    console.log("Server is Ready");
})

process.on("uncaughtException",(error:Error)=>{
    console.log("Stop here: uncaightException");
    console.log(error);    
})
process.on("unhandledRejection",(reason:any)=>{
    console.log("Stop here: uncaightException");
    console.log(reason)    
})