
const userController= require("../Controllers/userController");
var router = require('express').Router();
const userAuth = require('../Middleware/userAuth');


const imageAuth = require('../Middleware/imageAuth');
router.post('/userregister', userController.userRegister);
router.post('/userLogin',userController.userLogin);
router.get('/me',userAuth,userController.getMe);
router.get('/logout',userAuth,userController.userLogout);
router.post('/editprofile',userAuth,userController.editProfile);
router.post('/uploadimage',userAuth,imageAuth.single('profilepicture'),userController.uploadProfilePic);
router.get('/allusers/:pageNum/:limit',userController.getAllUsers);
router.get('/user/:id',userController.singleUser);
router.get('/userbookmarks/:pageNum/:limit',userAuth,userController.userBookmarks);
router.post('/sendverificationcode',userController.SendverificationCode);
router.put('/verifycode/:token',userController.verifingProcess);
router.put('/forgetpassword/:token',userController.forgetpassword);//forgotpasswordVerify,

module.exports = router;