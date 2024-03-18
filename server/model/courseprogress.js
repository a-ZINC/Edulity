const mongoose=require("mongoose");

const courseprogressSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    completedvideos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Sub-Section"
        }
    ]
})

module.exports=mongoose.model('CourseProgress',courseprogressSchema);