const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectionDB=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("Backend is successfully connected to the MongoDB Database")
    } catch (error) {
        console.log("Connection to the DataBase Error ", error);
        process.exit(1);
    }
}

module.exports = connectionDB