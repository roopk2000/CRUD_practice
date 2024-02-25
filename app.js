const express=require("express");
const model=require("./models/products.models");
const product = require("./models/products.models");
const PORT=5500
const app=express();
const productRoute=require("./routes/products.route.js")

app.use(express.json());//middleware to parse the json bodies
app.use(express.urlencoded({extended:false}));

// app.get("/",(req,res)=>{
//     res.send("hello from the server")
//     });

// app.get("/about",(req,res)=>{
//         res.send("hello from the about page")
//         });

app.use("/api/products", productRoute);
    
    






module.exports=app;