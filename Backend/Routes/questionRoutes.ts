const questionController= require("../Controllers/questionController");
var router = require('express').Router();
const userAuthQ = require('../Middleware/userAuth');
const imageAuthQ = require('../Middleware/imageAuth');

router.get('/testq/:upload', questionController.test);
router.post('/addquestion',userAuthQ,questionController.addQuestion);
router.put('/editquestion/:id', userAuthQ,questionController.editQuestion);
router.delete('/delquestion/:id', userAuthQ,questionController.deleteQuestion);
router.get('/allmyquestions/:pageNum/:limit',userAuthQ,questionController.myQuestions);
router.get('/allquestions/:pageNum/:limit',questionController.showAllQuestions);
router.get('/testq', questionController.test);
router.post('/addquestion', userAuthQ,questionController.addQuestion);
router.get('/singlequestion/:id', questionController.showSingleQuestion);
router.put('/editquestion/:id', userAuthQ,questionController.editQuestion);
router.delete('/delquestion/:id', userAuthQ,questionController.deleteQuestion);
router.put('/updateview/:id',questionController.viewQuestion);
router.put('/voting/:id',userAuthQ,questionController.VotingQuestion);
module.exports = router;
