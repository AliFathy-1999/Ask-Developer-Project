import {Schema,model} from 'mongoose';
const mongoose = require('mongoose');
let {schema} = require('./AnswerModel') ;
const replyschema = new Schema(
  {
    answers: [schema],
    answer:schema
  },
  {
    timestamps: true,
  }
);

const replies = model("replies",replyschema)
module.exports=replies
