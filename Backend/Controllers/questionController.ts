import {Request,Response } from "express";
import { Schema } from "mongoose";
import * as mongoose from "mongoose";
const userModel= require("../DB/Models/userModel")
const questionModel= require("../DB/Models/questionModel")
import {ControllerInterface } from '../Interfaces/ControllerInterface';
class Question{
    static test:ControllerInterface=async(req:Request,res:Response)=>{
        res.json({message:"Hello World"});
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
                data:userQuestion,
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
   /* static myQuestions = async(req:any,res:Response)=>{

    }*/
}
module.exports =Question;