import {Schema,model} from 'mongoose';
const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
const schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    QuestionId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref:"questions"
    },
    author: {
      type: String,
      required: true,
    },
    authorpImage: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      required: true,
      minlength: 6,
    },
    votes: {
      type: Number,
      default: 0,
    },
    voters: [
      {
        type: String,
        Default: [],
      },
    ],
    Replies: [{
      type:String,
      Default:[]
    }],
    bestanswer:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);
const answers = model("answers",schema)
module.exports=answers
