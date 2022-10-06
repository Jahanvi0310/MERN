const mongoose=require("mongoose")

const dbconnection =async () => {

    try 
    {
            await mongoose.connect('mongodb://localhost:27017/Foody');
        
    } catch (error) {
        console.log("mycon"+error);
    }
}

module.exports=dbconnection
