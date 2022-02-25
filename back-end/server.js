const express=require("express");
const dotenv=require("dotenv");
//const products=require("./AllProducts/products");
const dbconnection=require("./AllProducts/database")
const productroutes=require("./Routes/ProductRoutes")

const app=express()

dotenv.config();
dbconnection();
app.use(productroutes);

app.listen(process.env.PORT,()=>{
    console.log(`server running on portt${process.env.PORT}`);
});

/*
app.get("/",(req,res)=>{
    res.send("<h1>Node app</h1>");
});
app.get("/AllProducts",(req,res)=>{
    res.json(products);
})
app.get("/SingleProduct/:mypid",(req,res)=>{
	const singleproduct=products.find((p)=>(p.id==req.params.mypid));
	res.json(singleproduct);
});
*/