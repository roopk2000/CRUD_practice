const express=require("express");
const router=express.Router();
const model=require("../models/products.models")
const {getProducts, getProduct, updateProduct, deletedProduct, addProduct}=require("../controllers/products.controller")


router.post("/",addProduct)

router.get("/",getProducts)

router.get("/:id",getProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deletedProduct)

module.exports=router;