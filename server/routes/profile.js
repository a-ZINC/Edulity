const express=require('express');
const router=express.Router();

const {profileUpdate,deleteAccount,updatedProfileImage}=require('../controller/profile');
const {auth}=require('../middlewares/auth');

router.post('/profileUpdate',auth,profileUpdate);
router.post('/deleteAccount',auth,deleteAccount);
router.post('/updatedProfileImage',auth,updatedProfileImage);

module.exports=router;