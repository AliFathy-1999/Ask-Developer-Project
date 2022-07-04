
const userController= require("../Controllers/userController");
const router = require('express').Router();
const userAuth = require('../Middleware/userAuth');

router.post('/userregister', userController.userRegister);
router.post('/userLogin',userController.userLogin);
router.get('/me',userAuth,userController.getMe);
router.get('/logout',userAuth,userController.userLogout);
router.get('/testauth',userAuth,userController.testAuth);
module.exports = router;