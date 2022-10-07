import {Request,Response } from "express";
const multer = require('multer');
const sharp = require('sharp');
const path=require('path');
const userModel= require("../DB/Models/userModel")
const questionModel= require("../DB/Models/questionModel")
const answerModel= require("../DB/Models/AnswerModel")
const sendEmail = require("../helpers/sendEmail.helpers")
import {ControllerInterface } from '../Interfaces/ControllerInterface';
let jwt = require('jsonwebtoken');

class User{
    static userRegister:ControllerInterface= async(req:Request,res:Response) =>{
        try{
        const userData = new userModel(req.body)
        await userData.save();
        res.status(200).send({
            apiStatus:true,
            data:userData,
            message:"User Register Successfully"
        })
        }catch(e:any){
            res.status(500).send({
                apiStatus:true,
                data:e,
                message:e.message
            })
        }
    }
    static userLogin:ControllerInterface = async(req:Request,res:Response)=>{
        const userData = await userModel.login(req.body.email,req.body.password)
        const token = await userData.generateToken();
        try{
            res.status(200).send({
                apiStatus:true,
                data:{user:userData,token},
                message:"User Login Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }

    static getMe =async (req:any,res:Response) => {
        const questionsCount = await questionModel.countDocuments({userId:req.user._id})
        const answersCount = await answerModel.countDocuments({userId:req.user._id})
        res.status(200).send({
            apiStatus:true,
            data:req.user,
            questionsCount:questionsCount,
            answersCount:answersCount,
        })
    }
    static userLogout = async(req:any,res:Response)=>{
        try{
            req.user.tokens=req.user.tokens.filter((token:any)=>{
                return token.token !== req.token
            });
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"Logged out Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                message:e.message
            })
        }
    }
    static editProfile = async(req:any,res:Response)=>{
            try{
                const userData =await userModel.findByIdAndUpdate({_id:req.user._id},req.body)
                await userData.save()
                res.status(200).send({
                    apiStatus:true,
                    data:req.body,
                    message:"User data updated Successfully"
                })
            }catch(e:any){
                res.status(500).send({
                    apiStatus:false,
                    data:e,
                    message:e.message
                })
            }
    }
    static uploadProfilePic= async(req:any,res:Response)=>{
        try{
            let fileN = req.file.originalname;
            const myimagePath=path.join(`${req.file.path}`);
            const ext = path.extname(req.file.originalname);
            if(ext == '.tiff' || ext == '.jpeg'){fileN = fileN.slice(0, -5);}else{fileN = fileN.slice(0, -4);}
            const myFileName = fileN
            const profilepicpath = `../../../assets/profilepicture/`
            const imageP = "./Frontend/src/assets/profilepicture/";
            const profilepicture = `${req.user.username}-${myFileName}-profilepicture-${Date.now()}${ext}`
            await sharp(myimagePath).resize({width: 150,height:150}).toFile(`${imageP}${profilepicture}`);
            req.user.pImage=`${profilepicpath}${profilepicture}`;
            await req.user.save();
            res.status(200).send({
                apiStatus: true,
                profilepicture:profilepicture,
                data:req.user,
                message: "Image Uploaded Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus: false,
                data:e.message,
                message: "Only images are allowed (.png, .jpg, .tiff, .jpeg)"
            })
        }
    }
    static getAllUsers = async(req:any,res:Response)=>{
        var query   = {};
        var options = {
            lean:     true,
            page:     req.params.pageNum,
            limit:    req.params.limit
        };
        userModel.paginate(query,options,async function(err:any, result:any) {
            try{
               const users =  await  userModel.find().select("_id and username and pImage and jobtitle and country and votes").sort({createdAt:-1})
                res.status(200).send({
                    apiStatus:true,
                    data:users,
                    message:"All User information fetched Successfully"
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
    static singleUser= async (req:any,res:Response)=>{
        try{
            const user = await userModel.findById({_id:req.params.id})
            res.status(200).send({
                apiStatus:true,
                data:user,
                message:"User information fetched Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static addsocialmedialinks= async(req:any,res:Response)=>{
        try{
            const socialData = await userModel.findByIdAndUpdate({_id:req.user._id},{socialmedia:req.body},);
                await socialData.save()
            res.status(200).send({
                apiStatus:true,
                data:socialData,
                message:"Social Media Links Added Successfully"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static userBookmarks = async(req:any,res:Response)=>{
        var query   = {};
        var options = {
            lean:     true,
            page:     req.params.pageNum,
            limit:    req.params.limit
        };
        userModel.paginate(query,options,async function(err:any, result:any) {
        try {
            const userBookmarks = await userModel.findById({_id:req.user._id}).select("bookmarks")
            res.status(200).send({
                apiStatus:true,
                data:userBookmarks,
                message:"User Bookmarks fetched Successfully"
            })
        } catch (error:any) {
            res.status(500).send({
                apiStatus:false,
                data:error,
                message:error.message
            })
        }
    });
    }
    static SendverificationCode= async(req:any,res:Response)=>{
        try{
            const userEmail = req.body.email;
            const emails = await userModel.find({}).select("email")
            const emailsArray = emails.map((email:any)=>email.email)
           const email = emailsArray.filter((email:any)=>email === userEmail)
            if(email.toString()){
                const token = jwt.sign({email:userEmail},process.env.TOKEN_SECRET_VERIFICATION)
                    sendEmail(email,token);
            }else if(!(email.toString())){
                    throw new Error("Email not found")
                }
            res.status(200).send({
                apiStatus:true,
                message:"Verification code sent Successfully, Please check your email you will find it in your inbox or spam folder"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static verifingProcess= async(req:any,res:Response)=>{
        try{
            const userToken = req.params.token
            const decoded = jwt.verify(req.params.token,process.env.TOKEN_SECRET_VERIFICATION)
            var d = new Date
            const datenow = [d.getMonth()+1,d.getDate(),d.getFullYear()].join('/')+' '+
                      [d.getHours(),
                       d.getMinutes(),
                       d.getSeconds()].join(':');
            const userVerify = await userModel.findOne({email:decoded.email})
            if(userVerify.verify[0].code===req.body.verify && userVerify.verify[0].expire <= datenow){
                userVerify.verify[0].status=true;
                await userVerify.save()
            }else if(userVerify.verify[0].code!==req.body.verify){
                throw new Error("Verified code is incorrect ")
            }else if(userVerify.verify[0].expire >= datenow){
                throw new Error("Verified code is expired ")
            }else if(userVerify.verify[0].status===true){
                throw new Error("You are already verified ")
            }
            res.status(200).send({
                apiStatus:true,
                message:"Verified code is correct"
            })
        }catch(e:any){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static forgetpassword= async(req:any,res:Response)=>{
        try{
            const userToken = req.params.token
            const decoded = jwt.verify(userToken,process.env.TOKEN_SECRET_VERIFICATION)
            const Resetpassword = await userModel.forgetPassword(decoded.email,req.body.password)
            res.status(200).send({
                apiStatus:true,
                message:"Password Reseted Successfully"
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
module.exports = User;
