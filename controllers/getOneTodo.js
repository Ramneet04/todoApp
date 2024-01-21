const Todo= require("../models/Todo");

exports.getOneTodo = async (req,res)=>{
    try {
        // fetch all todo items from datbase
        const id= req.params.id;
        const value= await Todo.findById({_id: id});

        if(!value){
            return res.status(404).send('No data with given ID');
        }

       await res.status(200).json({
            success: true,
            data: value,
            message: `Successfully fetched the data of ${id}`
        }) 
        console.log("fetched");
    } catch (error) {
        console.log("Fetched failed!!! ", error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        })
    }
};