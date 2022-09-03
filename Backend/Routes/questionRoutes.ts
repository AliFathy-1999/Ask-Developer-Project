const questionController= require("../Controllers/questionController");
var router = require('express').Router();
const userAuthQ = require('../Middleware/userAuth');
const imageAuthQ = require('../Middleware/imageAuth');

router.post('/addquestion',userAuthQ,questionController.addQuestion);
router.put('/editquestion/:id', userAuthQ,questionController.editQuestion);
router.delete('/delquestion/:id', userAuthQ,questionController.deleteQuestion);
router.get('/allmyquestions/:pageNum/:limit',userAuthQ,questionController.myQuestions);
router.get('/allquestions/:pageNum/:limit',questionController.showAllQuestions);
router.post('/addquestion', userAuthQ,questionController.addQuestion);
router.get('/singlequestion/:id', questionController.showSingleQuestion);
router.put('/editquestion/:id', userAuthQ,questionController.editQuestion);
router.delete('/delquestion/:id', userAuthQ,questionController.deleteQuestion);
router.put('/updateview/:id',questionController.viewQuestion);
router.put('/voting/:id/:vote',userAuthQ,questionController.VotingQuestion);
router.post('/search/:pageNum/:limit',questionController.search);
router.put('/countanswers/:id',questionController.countanswers);
module.exports = router;
