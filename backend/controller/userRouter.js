const express = require("express");

const userRouter = express.Router();

const uploadUserImage = require("../middlewares/multer");

const {userModel}=require("../models/userModel");

userRouter.post("/signup",uploadUserImage.single("image"),async(req,res)=>{
    try{
        const{name,email,password}=req.body
     if(name!="" || email!="" || password!=""){
        return res.status(400).send({message:"All Fields are required"});
     }
     const user = await userModel.findOne({email:email});
     if(user){
        return res.status(200).send({mesage:"User Already Exist"});
     }

      const newUser = await userModel.insertOne({name,email,password});

      return res.status(200).send({message:"User registered successfully"});

    }catch(error){
        return res.status(500).send({message:"Something went wrong"});
    }
})

userModel.post("/login",async(req,res)=>{
    try{
       const {email,password} = req.body;
       if(email!="" || password!=""){
        return res.status(400).send({message:"All Fields are required"});
    } 
    const user = await userModel.findOne({email:email});
     if(user){
        return res.status(200).send({mesage:"User Already Exist"});
     }
     return res.status(200).send({mesage:"User loged in successfuly"})
    }catch(error){
        return res.status(500).send({message:"Something went wrong"});
    }
})



module.exports = userRouter;