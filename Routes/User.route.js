const express=require("express")
const { addUser, getAllUser, getOneUser, deleteUser, updateUser } = require("../controller/User.controller")
const userRouter=express.Router()

userRouter.post("/addUser",addUser)
userRouter.get("/getAllUser",getAllUser)
userRouter.get("/getOneUser/:userId",getOneUser)
userRouter.delete("/deleteUser/:userId",deleteUser)
userRouter.put("/updateUser/:userId",updateUser)

module.exports={
    userRouter
}