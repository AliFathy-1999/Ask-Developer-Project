import {Request,Response } from "express";
const userModel= require("../DB/Models/userModel")
const questionModel= require("../DB/Models/questionModel")
import {ControllerInterface } from '../Interfaces/ControllerInterface';

class Question{
    static test:ControllerInterface=async(req:any,res:Response)=>{
        res.json({'message':'test'})
    }
    static addQuestion = async(req:any,res:Response)=>{
        try{
            const userQuestion = new questionModel({
                ...req.body,
                userId:req.user._id,    
                author:req.user.username,
                authorpImage:req.user.pImage,
            });
            await userQuestion.save()
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
            sort:     { title: -1 },
            populate: 'MyQuestions',
            lean:     true,
            page:   req.params.pageNum, 
            limit:    +req.params.limit
        };
        questionModel.paginate(query,options,async function(err:any, result:any) {
            try{
                await req.user.populate('MyQuestions')
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
        try{
            const pageCount = +req.params.limit
            const pageNum = +req.params.pageNum  // start 0
            const questionData = 
                await questionModel.find()
                .sort({title:-1})
                .limit(pageCount)
                .skip(pageCount*pageNum)
                res.status(200).send({
                    apiStatus:true,
                    data:questionData,
                    message:"All Questions"
                })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }

        
    }
}
module.exports =Question;