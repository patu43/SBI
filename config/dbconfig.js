const mongoose=require('mongoose')

const connectDB = async() =>{

    try{

        const db= process.env.DB_URL;
       await mongoose.connect('mongodb+srv://pratikpatil1311:athrav4388$@cluster0.2bvvrhg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("mongoDB connected successfully ....")
    }
    catch(err){
        console.log(err);
        process.exit(1)

 
    }

}
module.exports=connectDB;
