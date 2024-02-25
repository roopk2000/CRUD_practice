const mongoose=require("mongoose")  ;
const products=mongoose.Schema({
    name:{
        type: String,
        required : true,

    },
    price :{
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },

},{
    timestamps:true,
});

const product=mongoose.model("Products",products);

module.exports=product;