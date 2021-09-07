const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            require:true,
            unique:true,
        },
        desc:{
            type: String,
            require:true,
        },
        photo:{
            type: String,
            require:false,
        },
        username:{
            type: String,
            require:true,
        },
    },
    {timestamps:true}
);
module.exports=mongoose.model("Post",PostSchema);