import {Schema,model} from 'mongoose';
const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
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
    file:{
        type:String,
        default:"",
    },
    title:{
        type:String,
        required:true,
        minlength:6,
        maxlength:300,
    },
    body:{
        type:String,
        required:true,
        minlength:6,
        maxlength:3500,
    },
    votes:{
        type:Number,
        default:0,
    },
    tags: [
        {
                type:String,
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
schema.plugin(mongoosePaginate);

const questions = model("questions",schema)
module.exports =questions;