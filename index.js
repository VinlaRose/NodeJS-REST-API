const express = require("express");
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");




dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true, useUnifiedTopology: true},()=>{
    console.log("Connected to MongoDB");
});

//middleware: The middleware sits between the client and the server, processing requests and responses and ensuring that data is in the correct format before it is passed on.

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

// app.get("/",(req,res) => {
//     res.send("welcome to home page")
// })

// app.get("/users",(req,res) => {
//     res.send("welcome to users page")
// })

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);




app.listen(8800, ()=>
{
    console.log("Backend is running");
})