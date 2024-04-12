const mongoose=require('mongoose')

const connectDB = async() =>{

    try{

        const db= process.env.DB_URL;
       await mongoose.connect(process.env.DB_URL)
        console.log("mongoDB connected successfully ....")
    }
    catch(err){
        console.log(err);
        process.exit(1)

 
    }

}
module.exports=connectDB;
