const express = require ("express");
const app = express();
const connect = require("./mongoDB");



app.get("/",(req,res)=>{
    try{
        res.status(200).send({message:"This is E-Commerece - Code - Along - Backend"});
    }catch(error){
        res.status(500).send({message:"Something went wrong"})
    }
})

app.listen(8000,async()=>{
    try{
      await connect();
      console.log("Server connected successfully");
    }catch(error){
        console.log("Serve not connected",error)
    }
})