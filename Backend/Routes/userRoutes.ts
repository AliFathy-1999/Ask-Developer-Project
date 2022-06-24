
const userController= require("../Controllers/userController");
const router = require('express').Router();
const userAuth = require('../Middleware/userAuth');

router.post('/userregister', userController.userRegister);
router.post('/userLogin',userAuth,userController.userLogin);
module.exports = router;