import {Schema,model} from 'mongoose';
const mongoose = require('mongoose');
<<<<<<< HEAD
var mongoosePaginate = require('mongoose-paginate');
=======

>>>>>>> origin
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
<<<<<<< HEAD
    file:{
        type:String,
        default:"",
    },
=======
>>>>>>> origin
    title:{
        type:String,
        required:true,
        minlength:6,
<<<<<<< HEAD
        maxlength:300,
=======
        maxlength:100,
>>>>>>> origin
    },
    body:{
        type:String,
        required:true,
        minlength:6,
<<<<<<< HEAD
        maxlength:3500,
=======
        maxlength:1000,
>>>>>>> origin
    },
    votes:{
        type:Number,
        default:0,
    },
    tags: [
<<<<<<< HEAD
        {
                type:String,
                required: true
=======
        { 
            type: String,
            required: true
>>>>>>> origin
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
<<<<<<< HEAD
=======

    

    
>>>>>>> origin
},
{
    timestamps:true
});
<<<<<<< HEAD
schema.plugin(mongoosePaginate);

=======
>>>>>>> origin
const questions = model("questions",schema)
module.exports =questions;