const mongoose=require("mongoose");
const ProductSchema=mongoose.Schema({
      id:Number,
      name:String,
      price:String,
      capt:String,
      avail:Number,
      image:String  
});

const Products=mongoose.model("products",ProductSchema);

module.exports=Products;