let mongoose = require('mongoose')
import { Request,Response } from "express"
const QuestionModel = require("../DB/Models/questionModel")
const AnswerModel = require("../DB/Models/AnswerModel")
const userModel = require("../DB/Models/userModel")
const questionModel = require("../DB/Models/questionModel")
const RepliesModel = require("../DB/Models/replyModel")
class Answer{
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
  static AllAnswersForSingleQuestion = async(req:any, res:Response)=>{
          var query   = {};
          var options = {
              sort:      {createdAt:-1} ,
              lean:     true,
              page:   req.params.pageNum,
              limit:    +req.params.limit
          };
        AnswerModel.paginate(query,options,async function(err:any, result:any) {
          try{
          const qId  = mongoose.Types.ObjectId(req.params.id);
          const answers = await AnswerModel.find({QuestionId:qId}).sort({createdAt:-1})
            res.status(200).send({
                apiStatus:true,
                data:answers,
                message:"All answers fetched Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
      })
  }
  static VotingAnswer = async(req:any,res:Response)=>{
    try{
      let voteNumber;
      const authorData =await AnswerModel.findById({_id:req.params.id}).select('userId')
      const isAuthor:any = Array.of(authorData.userId).filter((authorid:any) => authorid !== req.user._id)
      const votingData =await AnswerModel.findById({_id:req.params.id}).select('voters')
      const Uservote:any = (votingData.voters).filter((voterid:any) => voterid == req.user._id).length
        if(Uservote<=0 || (isAuthor=== req.user._id) ){
            if(req.params.vote === 'up'){voteNumber = 1}else if(req.params.vote === 'down'){voteNumber = -1}
            const answerData =await AnswerModel.findByIdAndUpdate(
              {_id:req.params.id},
              {$inc:{votes:voteNumber},
              $push:{voters:req.user._id}},
              );
              const userVotes =await userModel.findByIdAndUpdate(
                {_id:req.params.userid},
                {$inc:{votes:voteNumber},
                $push:{voters:req.user._id}}
                );
              await answerData.save() && userVotes.save()

        }else if(Uservote>0){
            throw new Error("Author: You can't vote on your own answer,Voter: You can vote on any answer you have not voted on and Voter: You can vote only once on any answer");
        }

        res.status(200).send({
            apiStatus:true,
            isAuthor:isAuthor,
            votingData:votingData.voters,
            filtervote:Uservote,
            message:"Answer Voted Successfully"
        })
    }catch(e:any){
        res.status(500).send({
            apiStatus:false,
            message:e.message
        })
    }
}
  static myAnswers = async (req: any, res: Response)=>{
    var query   = {};
    var options = {
        lean:     true,
        page:     +req.params.pageNum,
        limit:    +req.params.limit
    };
    AnswerModel.paginate(query,options,async function(err:any, result:any) {
        try{
           const myanswers =  await AnswerModel.find({userId:req.user._id}).select("QuestionId and body and createdAt and updatedAt").sort({createdAt:-1})
            res.status(200).send({
                apiStatus:true,
                data:myanswers,
                message:"All my Answers fetched Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    });
  }
  static SingleQuestion = async (req: any, res: Response)=>{
      try {
        const answer = await AnswerModel.findById({_id:req.params.id})
        res.status(200).send({
            apiStatus:true,
            data:answer,
            message:"Answer fetched Successfully"
        })
      } catch (error:any) {
          res.status(500).send({
              apiStatus:false,
              data:error,
              message:error.message
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
