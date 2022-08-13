const AnswerRouter = require("express").Router()
const AnswerController = require("../Controllers/AnswerController")
const userAuthA = require("../Middleware/userAuth")

AnswerRouter.get("/reply",AnswerController.getReplyMessage)
AnswerRouter.post("/addanswer/:id",userAuthA,AnswerController.addAnswer)
AnswerRouter.put("/editanswer/:questionid/:answerid",userAuthA,AnswerController.EditAnswer)
AnswerRouter.delete("/delanswer/:questionid/:answerid",userAuthA,AnswerController.DeleteAnswer)
AnswerRouter.get("/getanswers/:id/:pageNum/:limit",AnswerController.AllAnswersForSingleQuestion)
AnswerRouter.put('/votinganswer/:id/:vote',userAuthA,AnswerController.VotingAnswer);
module.exports = AnswerRouter
