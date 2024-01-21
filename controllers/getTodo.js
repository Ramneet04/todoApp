const Todo= require("../models/Todo");

exports.getTodo = async (req,res)=>{
    try {
        // fetch all todo items from datbase
        const value= await Todo.find({});
        res.status(200).json({
            success: true,
            data: value,
            message: "Successfully fetched the data"
        }) 
    } catch (error) {
        console.log("Fetched failed!!! ", error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        })
    }
};