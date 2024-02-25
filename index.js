const express=require("express");
const { default: mongoose } = require("mongoose");
const app=require("./app")



const PORT=5500;


mongoose.connect("mongodb+srv://meroopkumar2:LDQLAQuRoOpvclDj@cluster0.uw8ifsr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to database");
    app.listen(PORT, ()=>{
        console.log(`Server is listening on the PORT ${PORT}`)
    })
}).catch((err)=>{
    console.log(err);
})



//LDQLAQuRoOpvclDj