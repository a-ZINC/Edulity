const express=require('express');
const router=express.Router();

const {courseCreate,updateCourse, deleteCourse}=require('../controller/course');
const {auth,isInstructor,isAdmin}=require('../middlewares/auth')
const {createSection,updateSection,deleteSection}=require('../controller/section');
const {createSubsection,updateSubsection,deleteSubsection}=require('../controller/subsection');
const {createCategory,showAllCategory,categoryDetails}=require('../controller/category');


router.post('/createcourse',auth,isInstructor,courseCreate);
router.post('/courseupdate',auth,isInstructor,updateCourse);/*testing required*/
router.post('/deletecourse',auth,isInstructor,deleteCourse);


router.post('/createcategory',auth,isAdmin,createCategory);
router.get('/showallcategory',showAllCategory);
router.post('/categorydetails',categoryDetails); /*testing required*/

router.post('/createsection',auth,isInstructor,createSection);
router.post('/deletesection',auth,isInstructor,deleteSection);
router.post('/updatesection',auth,isInstructor,updateSection);

router.post('/createsubsection',auth,isInstructor,createSubsection);
router.post('/deletesubsection',auth,isInstructor,deleteSubsection);
router.post('/updatesubsection',auth,isInstructor,updateSubsection);


module.exports=router;