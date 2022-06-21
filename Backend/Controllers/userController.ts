import {Request,Response } from "express";
const userModel= require("../DB/Models/userModel")
class User{
    static userRegister = async(req:Request,res:Response) => {
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
    static userLogin = async(req:Request,res:Response)=>{
        const userData = await userModel.login(req.body.email,req.body.password)
        try{
            res.status(200).send({
                apiStatus:true,
                data:userData,
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
}
module.exports = User;