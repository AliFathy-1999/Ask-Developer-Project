import {Request,Response } from "express";
class User{
    static test = (req:Request,res:Response) => {
        res.send('test');
    }
}
module.exports = User;