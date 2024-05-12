const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongo db is connect to node");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB