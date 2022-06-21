
const userController= require("../Controllers/userController");
const router = require('express').Router();

router.post('/userregister', userController.userRegister);
router.post('/userLogin', userController.userLogin);
module.exports = router;