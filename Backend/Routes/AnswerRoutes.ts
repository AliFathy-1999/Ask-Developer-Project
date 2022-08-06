const AnswerRouter = require("express").Router()
const AnswerController = require("../Controllers/AnswerController")
const userAuthA = require("../Middleware/userAuth")

AnswerRouter.get("/testanswer",AnswerController.testAnswer)
AnswerRouter.get("/reply",AnswerController.getReplyMessage)
AnswerRouter.post("/addanswer/:id",userAuthA,AnswerController.addAnswer)
AnswerRouter.put("/editanswer/:questionid/:answerid",userAuthA,AnswerController.EditAnswer)
AnswerRouter.delete("/delanswer/:questionid/:answerid",userAuthA,AnswerController.DeleteAnswer)
module.exports = AnswerRouter
