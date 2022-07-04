import {Request,Response } from "express";
interface ControllerInterface{
    (req:Request,res:Response):Promise<void>;
}

export {ControllerInterface};