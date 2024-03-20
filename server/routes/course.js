const express=require('express');
const router=express.Router();

const {courseCreate,updateCourse, deleteCourse,getInstructorCourse,getCourseDetail}=require('../controller/course');
const {auth,isInstructor,isAdmin, isStudent}=require('../middlewares/auth')
const {createSection,updateSection,deleteSection}=require('../controller/section');
const {createSubsection,updateSubsection,deleteSubsection}=require('../controller/subsection');
const {createCategory,showAllCategory,categoryDetails,showAllCategorywithpublishedCourse}=require('../controller/category');
const {createRating,getavgrating,getallrating}=require('../controller/ratingAndReviews')


router.post('/createcourse',auth,isInstructor,courseCreate);
router.post('/courseupdate',auth,isInstructor,updateCourse);
router.post('/deletecourse',auth,isInstructor,deleteCourse);
router.get('/getinstructorcourse',auth,isInstructor,getInstructorCourse);
router.post('/getcoursedetail',auth,isInstructor,getCourseDetail);


router.post('/createcategory',auth,isAdmin,createCategory);
router.get('/showallcategory',showAllCategory);
router.get('/showallcategorywithpublishedcourse',showAllCategorywithpublishedCourse);
router.post('/categorydetails',categoryDetails); /*testing required*/

router.post('/createsection',auth,isInstructor,createSection);
router.post('/deletesection',auth,isInstructor,deleteSection);
router.post('/updatesection',auth,isInstructor,updateSection);

router.post('/createsubsection',auth,isInstructor,createSubsection);
router.post('/deletesubsection',auth,isInstructor,deleteSubsection);
router.post('/updatesubsection',auth,isInstructor,updateSubsection);

router.post('/createrating',auth,isStudent,createRating);/*incoom*/
router.post('/getavgrating',getavgrating);/*incoom*/
router.get('/getallrating',getallrating);/*incoom*/


module.exports=router;