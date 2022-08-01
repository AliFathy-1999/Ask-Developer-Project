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
    },
    body:{
        type:String,
        required:true,
        minlength:6,
    },
    votes:{
        type:Number,
        default:0,
    },
    voters:[{
      type:String,
        Default:[]
    }],
    tags: [
        {
                type:String,
                required: true
        }
    ],
    views:{
        type:Number,
        default:0,
    },
    viwers:[{
      type:String,
      Default:[]
    }],
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
