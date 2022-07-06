import {Request,Response } from "express";
const multer = require('multer');
const fs=require('fs');
const path=require('path');
const userModel= require("../DB/Models/userModel")
import {ControllerInterface } from '../Interfaces/ControllerInterface';
class User{
    static func:ControllerInterface=async(req:Request,res:Response)=>{
        res.json({message:"Hello World"});
    }
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
        res.status(200).send({
            apiStatus:true,
            data:req.user,
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
                    data:userData,
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
            const imagePath=path.join(__dirname,`${req.file.path}`);
            let fileN = req.file.originalname;
            const ext = path.extname(req.file.originalname);
            if(ext == '.tiff' || ext == '.jpeg'){fileN = fileN.slice(0, -5);}else{fileN = fileN.slice(0, -4);}
            const myFileName = fileN
            const profilepicpath = `../../../assets/uploads/${myFileName}${ext}`
            req.user.pImage=profilepicpath;
            await req.user.save();
            res.status(200).send({
                apiStatus: true,
                profilepicpath:profilepicpath,
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
}
module.exports = User;