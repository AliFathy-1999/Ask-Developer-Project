
import {Request,Response } from "express";
const userModel= require("../DB/Models/userModel")
const questionModel= require("../DB/Models/questionModel")
const answerModel= require("../DB/Models/AnswerModel")
class Question{
    static addQuestion = async(req:any,res:Response)=>{
        try{
            const userQuestion = new questionModel({
                ...req.body,
                userId:req.user._id,
                author:req.user.username,
                authorpImage:req.user.pImage,
            });

            await userQuestion.save(); 
            res.status(200).send({
                apiStatus:true,
                message:"Question Added Successfully"
            })

        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }

    static editQuestion = async(req:any,res:Response)=>{
        try{
            const questionId = req.params.id;
            const userQuestion =await questionModel.findByIdAndUpdate({_id:questionId},req.body);
            res.status(200).send({
                apiStatus:true,
                questionId:questionId,
                data:req.body,
                message:"Question Edited Successfully"
            })
        }catch(e:any){
            res.status(501).send({
                apiStatus:true,
                data:e,
                message:e.message
            })
        }
    }
    static deleteQuestion = async(req:any,res:Response)=>{
        try{
            const questionData = await questionModel.findOneAndDelete({_id:req.params.id})

            res.status(200).send({
                apiStatus:true,
                message:"Question Deleted Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }

    static myQuestions = async(req:any,res:Response)=>{
        var query   = {};
        var options = {
            sort:      {createdAt:1} ,
            populate: 'MyQuestions',
            lean:     true,
            page:   req.params.pageNum,
            limit:    +req.params.limit
        };
        questionModel.paginate(query,options,async function(err:any, result:any) {
            try{
               const questions= await req.user.populate('MyQuestions')
                
                res.status(200).send({
                    apiStatus:true,
                    data:req.user.MyQuestions,
                    message:"All my questions fetched Successfully"
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
    static showSingleQuestion = async(req:any,res:Response)=>{
        try{
        let questionId = req.params.id;
        let singleQuestion = await questionModel.findById({_id:questionId})
        res.status(200).send({
            apiStatus:true,
            data:singleQuestion,
            Message:"Single Question Getted Successfully"
        })
    }catch(e:any){
        res.status(200).send({
            apiStatus:true,
            data:e,
            Message:e.message
        })
    }
    }
    static showAllQuestions = async(req:any,res:Response)=>{
        var query   = {};
        var options = {
            page:+req.params.pageNum,
            limit:+req.params.limit
        };
        questionModel.paginate(query,options,async function(err:any, result:any) {
            try{
              
              const questionData =  await questionModel.find()
              .sort({createdAt:-1});
                res.status(200).send({
                    apiStatus:true,
                    data:questionData,
                    //answerCount:answerCount,
                    message:"All Questions"
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
    static viewQuestion = async(req:any,res:Response)=>{
        try{
             const questionData =await questionModel.findByIdAndUpdate(
              {_id:req.params.id},
              {$inc:{views:1}},
              );
             await questionData.save()
            res.status(200).send({
                apiStatus:true,
                data:questionData,
                message:"Question Viewed Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static VotingQuestion = async(req:any,res:Response)=>{
        try{
          let voteNumber;
          const authorData =await questionModel.findById({_id:req.params.id}).select('userId')
          const isAuthor:any = Array.of(authorData.userId).filter((authorid:any) => authorid !== req.user._id)
          const votingData =await questionModel.findById({_id:req.params.id}).select('voters')
          const Uservote:any = (votingData.voters).filter((voterid:any) => voterid == req.user._id).length
            if(Uservote<=0 || (isAuthor=== req.user._id) ){
                if(req.params.vote === 'up'){voteNumber = 1}else if(req.params.vote === 'down'){voteNumber = -1}
                const questionData =await questionModel.findByIdAndUpdate(
                  {_id:req.params.id},
                  {$inc:{votes:voteNumber},
                  $push:{voters:req.user._id}},
                  );
                  await questionData.save()
            }else if(Uservote>0){
                throw new Error("Author: You can't vote on your own question,Voter: You can vote on any question you have not voted on and Voter: You can vote only once on any question");
            }

            res.status(200).send({
                apiStatus:true,
                isAuthor:isAuthor,
                votingData:votingData.voters,
                filtervote:Uservote,
                message:"Question Voted Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                message:e.message
            })
        }
    }
    static search = async (req:any,res:Response) => {
      var query   = {};
      var options = {
          page:+req.params.pageNum,
          limit:+req.params.limit
      };
      questionModel.paginate(query,options,async function(err:any, result:any) {
          try{
            const searchData = req.query.searchText
                const questionData =  await questionModel.find({
                        $or:[
                        {'title': { $regex : searchData,$options: "$i"}},
                        {'body': { $regex : searchData,$options: "$i"}},
                        {'tags':{ $regex : searchData,$options: "$i"}},
                        ]
                    })
            .sort({createdAt:-1});
              res.status(200).send({
                  apiStatus:true,
                  searchData:searchData,
                  data:questionData,
                  message:"Your search results were successfully retrieved."
              })

          }catch(e:any){
              res.status(500).send({
                  apiStatus:false,
                  data:e,
                  message:"No results found"
              })
          }
      });
    }
    static countanswers = async (req:any,res:Response) => {
        try{
            const answerC = await questionModel.answersCount(req.params.id)
            //const answerC = await answerModel.find({QuestionId:req.params.id}).length
            res.status(200).send({
                apiStatus:true,
                data:answerC,
                message:"Answer Count Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static bookmarkQuestion = async(req:any,res:Response)=>{
        try {
            const authorData =await questionModel.findById({_id:req.params.id}).select('userId')
            const userId = (req.user._id).toString()
            const isAuthor:any = (authorData.userId).toString();
            const bookmarkData =await questionModel.findById({_id:req.params.id}).select('bookmarker')
            const questionThings =await questionModel.findById({_id:req.params.id}).select('title and tags and votes and views and answersCount')
            const UserBookmark:any = (bookmarkData.bookmarker).filter((Bookmarkerid:any) => Bookmarkerid == req.user._id).length
                if(UserBookmark<=0 && isAuthor!== userId ){
                        const questionData =await questionModel.findByIdAndUpdate(
                        {_id:req.params.id},
                        {$push:{bookmarker:req.user._id}}
                        );
                    const userData = await userModel.findByIdAndUpdate({_id:req.user._id},{ $push: 
                        { bookmarks: {qId:req.params.id,qtitle:questionThings.title,qtags:questionThings.tags,qvotes:questionThings.votes,qviews:questionThings.views,qanswers:questionThings.answersCount} }
                     })
                        await questionData.save() && await userData.save()
                }else if(UserBookmark>0){
                    throw new Error("User: You can bookmarks only once on any question");
                }else if(isAuthor=== userId){
                    throw new Error("Author: You can't bookmarks his/her question");
                }
            res.status(200).send({
                apiStatus:true,
                message:"Question Bookmarked Successfully and Added to User Bookmarks"
            })
        } catch (error:any) {
            res.status(500).send({
                apiStatus:false,
                message:error.message
            })
        }
       
    }
    static unbookmarkQuestion = async(req:any,res:Response)=>{
        try {
            const userData =await userModel.findByIdAndUpdate({_id:req.user._id},{ $pull: { bookmarks: {qId:req.params.id} } })
                        const questionData =await questionModel.findByIdAndUpdate(
                        {_id:req.params.id},
                        { $pull: { bookmarker: { $in: req.user._id } },
                         }
                        );

                         await questionData.save() && userData.save()
            res.status(200).send({
                apiStatus:true,
                message:"Question UnBookmarked Successfully and Removed from User Bookmarks"
            })
        } catch (error:any) {
            res.status(500).send({
                apiStatus:false,
                message:error.message
            })
        }
       
    }
}
module.exports =Question;
