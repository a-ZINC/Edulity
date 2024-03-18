const RatingAndReview=require('../model/ratingandreview');
const Course=require('../model/course');

exports.createRating = async(req,res) =>{
    try{
        const userid=req.user.id;
        const {courseid,rating,review}=req.body;

        const course=await Course.findById({_id:courseid,
        studentenrolled:{$elemMatch :{$eq:userid}}});

        

    }catch(error){

    }
}