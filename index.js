const express=require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./Routes/User.route")
const app=express()
require("dotenv").config()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>nowDigitalEasy Backend</h1>")
})

app.use("/",userRouter)


const port=process.env.PORT||8080
app.listen(port,async()=>{
    try{
        await connection
        console.log("mongoDb connected")
        console.log(`server running on port ${port}`)
    }catch(err){
        console.log(err)
    }
    
})