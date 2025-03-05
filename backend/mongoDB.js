const mongoose = require("mongoose");

async function connect(){
    try{
      await mongoose.connect("mongodb+srv://saimanideep:sai18@cluster0.07xvl.mongodb.net/")
    }catch(error){
       console.log("Mogngo db error",error);
    }
    
}

module.exports = connect;