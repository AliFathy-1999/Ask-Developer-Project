import {Schema,model} from 'mongoose';
const mongoose = require('mongoose');

const schema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    author:{
        type:String,
        required:true,
    },
    authorpImage:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
        minlength:6,
        maxlength:100,
    },
    body:{
        type:String,
        required:true,
        minlength:6,
        maxlength:1000,
    },
    votes:{
        type:Number,
        default:0,
    },
    tags: [
        { 
            type: String,
            required: true
        }
    ],
    answers:[
        {
            answer:{
                type:String,
                default:"",
            }
        }
    ]

    

    
},
{
    timestamps:true
});
const questions = model("questions",schema)
module.exports =questions;