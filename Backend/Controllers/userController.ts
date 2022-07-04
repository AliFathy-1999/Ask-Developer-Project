import {Request,Response } from "express";
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
    static testAuth = async(req:any,res:Response)=>{
            try{
                res.status(200).send({
                    apiStatus:true,
                    message:"Test Successfully"
                })
            }catch(e:any){
                res.status(500).send({
                    apiStatus:false,
                    message:e.message
                })
            }
    }
}
module.exports = User;