import {Schema,model} from 'mongoose';
const mongoose = require('mongoose');
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
    views: {
      type: Number,
      default: 0,
    },
    viwers: [
      {
        type: String,
        Default: [],
      },
    ],
    Replies: [{
      type:String,
      Default:[]
    }]
  },
  {
    timestamps: true,
  }
);

const answers = model("answers",schema)
module.exports=answers
