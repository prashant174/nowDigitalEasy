const express=require("express")
const { UserModel } = require("../Model/User.Model")


const addUser=async(req,res)=>{
    try{

        const {name,role,email,phoneNumber}=req.body
        
        const user=new UserModel({name,role,email,phoneNumber})
        await user.save()

        res.status(201).send({msg:"user save successfully"})

    }catch(err){
        res.status(500).json({ err: 'Something went wrong please try again later' });
    }
}

const getAllUser=async(req,res)=>{
    try{
         
           const user=await UserModel.find()
           
           res.status(200).send({msg:"All user details fetched successfull",allUsersDetails:user})

    }catch(err){
        res.status(500).json({ err: 'Something went wrong please try again later' });
    }
}

const getOneUser=async(req,res)=>{
    try{
           const userId=req.params.userId

           const user=await UserModel.findOne({_id:userId})
           
           if(user!=null){
            res.status(200).send({msg:"User details fetched successfull by objectId",userDetails:user})
           }else{
            res.send({msg:"no user found"})
           }
           

    }catch(err){
        res.status(500).json({ err: 'Something went wrong please try again later' });
    }
}

const deleteUser=async(req,res)=>{
    try{
        const userId=req.params.userId

        const deleteUser=await UserModel.deleteOne({_id:userId})

        if(deleteUser.deletedCount===1){
            res.status(200).send({msg:"user deleted successfully"})
        }else{
            res.send({msg:"no user found"})
        }

        

    }catch(err){
        res.status(500).json({ err: 'Something went wrong please try again later' });
    }
}


const updateUser=async(req,res)=>{
    try{
        const userId=req.params.userId
        const payload=req.body

        console.log(userId,payload)

        const updateUser= await UserModel.findByIdAndUpdate({_id:userId},payload)

        if(updateUser){
            res.status(201).send({msg:"User details updated successfully"})
        }else{
            res.status(200).send({msg:"user not found "})
        }
       


    }catch(err){
        res.status(500).json({ err: 'Something went wrong please try again later' });
    }
}

module.exports={
    addUser,
    getAllUser,
    getOneUser,
    deleteUser,
    updateUser
}