const express= require("express");
const app=express();
const todoRoutes = require("./routes/todo");
const dbConnect = require("./config/database");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//well get eligible for parsing now we can pase the data or use or fetch...
app.use(express.json());

//mount the todo API routes
app.use("/api/v1",todoRoutes);

app.listen(PORT, ()=>{
    console.log("running at 4000");
})

dbConnect();

app.get("/", (req,res)=>{
    res.send("<h1>......This is HOMEPAGE......</h1>")
})