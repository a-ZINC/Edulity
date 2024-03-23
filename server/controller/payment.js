const {instance}=require('../config/Razorpay');
const Course=require('../model/course');
const mongoose=require('mongoose')


exports.capturePayment=async(req,res)=>{
    const {course}=req.body;
    const userid=req.user.id;

    if(course.length===0){
        return res.json({
            success:false,
            message:"No course selected for purchase "
        })
    }

    let amount=0;

    for(let courseid of course){
        let individualcourse
        try{
            individualcourse=await Course.findById(courseid);

            if(!individualcourse){
                return res.status(404).json({
                    success:false,
                    message:'No course found'
                })
            }

            const uid=new mongoose.Types.ObjectId(userid);

            if(course.studenenrolled.includes(uid)){
                return res
                    .status(200)
                    .json({ success: false, message: "Student is already Enrolled" })
            }

            amount+=course.price;

        }catch(error){
            console.log(error)
            return res.status(500).json({ success: false, message: error.message })
        }
    }
    const options={
        amount:amount*100,
        currency:"INR",
        receipt:Math.random(Date.now()).toString()
    }

    try{
        const res=await instance.orders.create(options);
        console.log(res);
        res.json({
            success: true,
            data: res,
          })
    }catch(error){
        console.log(error)
        res
        .status(500)
        .json({ success: false, message: "Could not initiate order." })
    }
}

