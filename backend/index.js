const express = require("express");

const app = express();

app.use(express.json());

const path = require("path");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const jwt = require('jsonwebtoken');

const userModel = require("./models/userModel");

const cors = require("cors");

const cartRouter = require("./controller/cartProducts");

app.use(cors());

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

console.log(MONGO_PASSWORD)

const PORT = process.env.PORT || 8080;

const useRouter = require("./controller/userRouter");

const productRouter = require("./controller/productRouter");

const allProductRouter = require("./controller/allProducts");

const addressRouter = require("./controller/addressRouter");


const mailer = require("./nodemailer");

const orderRouter = require("./controller/orderRouter");


app.get("/",(req,res)=>{
    try {
        res.send({message:"This is E-commerce Follow Along Backend"});
    } catch (error) {
        res.status(500).send({error});
    }
})

app.use("/user",useRouter);

app.use("/product",async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        console.log(token)
        if (!token) {
            return res.status(401).json({ message: "Please login" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
        const user = await userModel.findById(decoded.id);
        
        if (!user && user.id) {
            return res.status(404).json({ message: "Please signup" });
        }
        console.log(user.id)
        req.userId = user.id; 
        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Invalid Token", error });
    }
},productRouter);

app.use("/cart",
    async (req, res, next) => {
        console.log("cart")
        try {
            const token = req.header("Authorization");
            console.log(token)
            if (!token) {
                return res.status(401).json({ message: "Please login" });
            }
            
            const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
            const user = await userModel.findById(decoded.id);
            
            if (!user && user.id) {
                return res.status(404).json({ message: "Please signup" });
            }
            console.log(user.id);
            req.userId = user.id; 
            next();
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Invalid Token", error });
        }
    } 
    ,cartRouter);

    app.use("/address",
        async (req, res, next) => {
            console.log("cart")
            try {
                const token = req.header("Authorization");
                console.log(token)
                if (!token) {
                    return res.status(401).json({ message: "Please login" });
                }
                
                const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
                const user = await userModel.findById(decoded.id);
                
                if (!user && user.id) {
                    return res.status(404).json({ message: "Please signup" });
                }
                console.log(user.id);
                req.userId = user.id; 
                next();
            } catch (error) {
                console.log(error)
                return res.status(400).json({ message: "Invalid Token", error });
            }
        } ,
        addressRouter
    );


    app.use("/order",async (req, res, next) => {
        console.log("cart")
        try {
            const token = req.header("Authorization");
            console.log(token)
            if (!token) {
                return res.status(401).json({ message: "Please login" });
            }
            
            const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
            const user = await userModel.findById(decoded.id);
            
            if (!user && user.id) {
                return res.status(404).json({ message: "Please signup" });
            }
            console.log(user.id);
            req.userId = user.id; 
            next();
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Invalid Token", error });
        }
    }, orderRouter);

app.use("/allproducts",allProductRouter);

app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.listen(8080,async ()=>{
    try {
       await mongoose.connect(`mongodb+srv://saimanideep765:${MONGO_PASSWORD}@cluster0.q5duro4.mongodb.net/`);
       console.log("Connected sucessfully");
    } catch (error) {
        console.log("Something went wrong not able to connect to server",error);
    }
});



