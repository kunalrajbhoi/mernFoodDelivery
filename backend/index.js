const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config()

const app = express();
app.use(cors());
app.use(express.json({limit:"10mb"}))
const connectDB = require('./db/db')
const router = require('./routes')


app.get("/", (req, res) => {
    res.send("Server is running");
});


const PORT = process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("server is running")
})

// console.log("process.env.MONGODB_URI",process.env.MONGODB_URI);

app.use('/api',router)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running");
        console.log("http://localhost:" + PORT);
    });
});
