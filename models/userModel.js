const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
    image:{type:String}
})
const userModel = mongoose.model("users",schema);

module.exports = {userModel}