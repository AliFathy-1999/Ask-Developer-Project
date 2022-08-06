let mongoose = require('mongoose')
import { Request,Response } from "express"
const AnswerModel = require("../DB/Models/AnswerModel")
const RepliesModel = require("../DB/Models/replyModel")
class Answer{
  static testAnswer = (req:Request,res:Response)=>{
    res.json({"test":"Hello World"})
  }
  static addAnswer = async(req:any,res:Response)=>{
    try{
      const qId  = mongoose.Types.ObjectId(req.params.id);
    const answerData = new AnswerModel({
      ...req.body,
      userId:req.user._id,
      author:req.user.username,
      authorpImage:req.user.pImage,
      QuestionId:qId,
    })
    await answerData.save()
    res.status(200).send({
      apiStatus:true,
      data:answerData,
      message:"Answer Added Successfully"
    })
  }catch(e:any){
    res.status(500).send({
      apiStatus:false,
      data:e,
      message:e.message
    })
  }

  }
  static EditAnswer = async(req:any,res:Response)=>{
    try{
      const answerData =await AnswerModel.findByIdAndUpdate({_id:req.params.answerid},req.body);
      const answer = await AnswerModel.findById({_id:req.params.answerid})
      res.status(200).send({
        apiStatus:true,
        data:answer,
        message:"Answer Edited Successfully"
      })
    }catch(e:any){
      res.status(501).send({
        apiStatus:false,
        data:e,
        message:e.message
      })
    }
  }
  static DeleteAnswer = async(req:any,res:Response)=>{
    try {
      const answerData = await AnswerModel.findByIdAndDelete({_id:req.params.answerid})
      res.status(200).send({
        apiStatus:true,
        message:"Your Answer Deleted Successfully"
      })
    } catch (error:any) {
      res.status(200).send({
        apiStatus:false,
        data:error,
        message:"Error in Deleting your answer"
      })
    }
  }
  static getReplyMessage = async(req:any,res:Response)=>{
    try{
    const reply = await RepliesModel.find();
    res.status(200).send({
      apiStatus:true,
      data:reply,
      message:"Reply Message was  successfully sent tokens  to your server."
    })
  }catch(e:any){
    res.status(500).send({
      apiStatus:true,
      data:e,
      message:e.message
    })
  }
  }
}
module.exports = Answer
