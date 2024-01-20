const Todo = require("../models/Todo");

exports.createTodo = async (req,res)=>{
    try {
        const {title, description} = req.body;
        const tododata =  await Todo.create({
            title,description
        });
        res.status(200).json({
            success: true,
            data: tododata,
            message: "Entry Created Successfully",
        })
    } catch (error) {
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        })
    }
};