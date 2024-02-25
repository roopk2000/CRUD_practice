const express=require("express");
const model=require("../models/products.models");
 
const getProducts=async(req, res)=>{
    try{
        const products=await model.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};
 const getProduct=async(req, res)=>{
    try{
        const {id}=req.params;
        const products=await model.findById(id);
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};
const updateProduct=async(req, res)=>{
    try{
        const {id}=req.params;
        const product= await model.findByIdAndUpdate(id, req.body);
        if(!product){
            res.status(404).json({error:"Product not found"});
        }
        const updatedProduct= await model.findById(id);
        res.status(500).json(updatedProduct);
    }
    catch(error){
        res.status(500).json({error :error.message});
    }
};
const deletedProduct=async(req, res)=>{
    try{
        const {id}=req.params;
        const product= await model.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({error:"Product not found"});
        }
        const deletedProduct= await model.findById(id);
        res.status(200).json({"message":"Product Deleted Successfully"});
    }
    catch(error){
        res.status(500).json({error :error.message});
    }
}
const addProduct=async (req, res)=>{
    try{
        const product=await model.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({error : error.message});
    }
}



module.exports={getProducts,getProduct, updateProduct,deletedProduct, addProduct};