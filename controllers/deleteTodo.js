const Todo = require("../models/Todo");

exports.deleteTodo = async (req,res)=>{
    try {
        const {id} = req.params;
        const deletedValue = await Todo.findByIdAndDelete({_id: id});
        res.status(200).json({
            success: true,
            data: deletedValue,
            message: `Deletion of ${id} successfull`
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