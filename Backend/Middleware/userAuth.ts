import { NextFunction } from "express";
import {Request,Response } from "express";
let jwt = require('jsonwebtoken');
const User = require('../DB/Models/userModel')
const userAuth = async (req:any,res:Response,next:NextFunction)=>{
    try{
        const token = req.header('Authorization').replace('bearer ', '')
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET)
        const user = await User.findOne({_id:decoded._id,'tokens.token': token})
        if(!user){
            throw new Error('User Not Found')
        }
        req.user = user;    
        req.token = token;
        next()
    }catch(e:any){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"UnAuthorized User"
        })
    }
}
module.exports = userAuth;