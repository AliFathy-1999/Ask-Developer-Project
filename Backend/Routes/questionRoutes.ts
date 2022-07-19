const questionController= require("../Controllers/questionController");
var router = require('express').Router();
const userAuthQ = require('../Middleware/userAuth');
const imageAuthQ = require('../Middleware/imageAuth');
router.get('/testq', questionController.test);
router.post('/addquestion', userAuthQ,questionController.addQuestion);
router.put('/editquestion/:id', userAuthQ,questionController.editQuestion);
router.delete('/delquestion/:id', userAuthQ,questionController.deleteQuestion);
module.exports = router;