
const userController= require("../Controllers/userController");
const router = require('express').Router();

router.get('/', userController.test);
module.exports = router;