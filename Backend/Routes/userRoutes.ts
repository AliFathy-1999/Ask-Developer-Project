
const userController= require("../Controllers/userController");
const router = require('express').Router();
const userAuth = require('../Middleware/userAuth');
const imageAuth = require('../Middleware/imageAuth');

router.post('/userregister', userController.userRegister);
router.post('/userLogin',userController.userLogin);
router.get('/me',userAuth,userController.getMe);
router.get('/logout',userAuth,userController.userLogout);
router.post('/editProfile',userAuth,userController.editProfile);
router.post('/uploadimage',userAuth,imageAuth.single('profilepicture'),userController.uploadProfilePic);
module.exports = router;