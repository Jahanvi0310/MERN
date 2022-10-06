const express=require("express");
const products=require("../Modal/ProductModal");
const ProductRoute=express.Router();
const asynexpress=require("express-async-handler");

ProductRoute.get("/AllProducts",
asynexpress(async (req,res)=>{
    const allproduct=await products.find();
    console.log(allproduct);
    res.json(allproduct);
}))

ProductRoute.get("/singleproductpage/:mypid",asynexpress(async(req,res)=>{
    //  console.log("jjj"+req.params.mypid);  
	const singleproduct=await products.findOne({"id":req.params.mypid});
    // console.log("j"+req.params.mypid);
    console.log(singleproduct);
    console.log(singleproduct.id);
    res.json(singleproduct);
}));

module.exports=ProductRoute;