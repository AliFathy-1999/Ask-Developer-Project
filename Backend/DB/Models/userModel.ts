
import {Schema,model,VirtualType, SchemaType} from 'mongoose';
import { isDate } from 'util/types';
import validator from 'validator';
var mongoosePaginate = require('mongoose-paginate');
const bcryptjs = require('bcryptjs');
let jwt = require('jsonwebtoken');
import { IUserModel } from '../../Interfaces/ModelsInterface';

const schema= new Schema<IUserModel>({
    fname:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:20
    },
    lname:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:20
    },

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        match:/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/,
        
        validate(value:string){
            if(value.includes("password")){
                throw new Error("Password cannot contain 'password'")
            }else if(!value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/)){
                throw new Error("Password must contain at least one number , Capital letter and one special character")
            }
        }
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:3,
        maxlength:20,
    },
    phoneno:{
        type:String,
        required:true,
        trim:true,
        validate(value:string){
            if(!validator.isMobilePhone(value)){
                throw new Error("Phone number is invalid")
            }
        }
    },
    status:{
        type:Boolean,
        default:false
    },
    pImage:{
        type:String,
        default:"https://secure.gravatar.com/avatar/${this._id}?s=90&d=identicon"
    },
    votes:{
        type:Number,
        default:0
    },
    answers:{
        type:Number,
        default:0
    },

    questions:{
        type:Number,
        default:0
    },
    country:{
        type:String,
        default:"No Country"
    },
    gender:{
        type:String,
        required:true,
    },
    jobtitle:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50,
        default:"Developer"
    },
    summary:{
        type:String,
        minlength:10,
        maxlength:500,
        default:"No Summary"
    },
    role:{
        type:String,
        default:"user"
    },
    DOB:{
        type:Date,
        required:true,
        validate(value:Date){
            if(!isDate(value) || value > new Date() || value < new Date(1960,1,1) || value > new Date(2010,12,31)){
                throw new Error("Date of birth is invalid")
            }
        },
    },
    verify:[
        {        
            code:{
                type:Schema.Types.Mixed,
                
            },
            expire:String,
            status:{
                type:Boolean,
                default:false
            },
            token:String,
        }
    ],
    verified:{
        type:Boolean,
        default:false
    },
    facebookacc:{type:Schema.Types.Mixed,default:""},
    twitteracc:{type:Schema.Types.Mixed,default:""},
    githubacc:{type:Schema.Types.Mixed,default:""},
    linkedinacc:{type:Schema.Types.Mixed,default:""},
    website:{type:Schema.Types.Mixed,default:""},
    bookmarks:[
        {
            qId:String,
            qtitle:String,
            qtags:[String],
            qvotes:Number,
            qanswers:Number,
            qviews:Number,
        },
        
    ],
    tokens : [
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps:true  //createdAt, updatedAt
});
schema.virtual('MyQuestions',{
    ref:"questions",
    localField:"_id",
    foreignField:"userId",
 })

 schema.plugin(mongoosePaginate);
schema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.__v;
    delete userObject.tokens;
    delete userObject.verify;
    return userObject;
}
schema.pre('save',async function (){
    const user = this;
    if(user.isModified("password")){
        user.password =await bcryptjs.hash(user.password,10)
    }
})
schema.statics.login = async function(email,password){
    const userData = await User.findOne({email});
    if(!userData) throw new Error("Invalid Email");
    const isMatched= await bcryptjs.compare(password,userData.password)
    if(!isMatched) throw new Error("Invalid Password");
   return userData;
}
schema.statics.forgetPassword = async function(email,password){
    const userdata = await User.findOne({email});
    if(userdata?.verify[0].status){
    const userencrypt = await bcryptjs.hash(password,10);
    const user = await User.findOneAndUpdate({email},{password:userencrypt});
    await user?.save();
    }else{
        throw new Error("Enter the correct verification code or your verification code has expired")
    }

    
}
schema.methods.generateToken = async function(){
    const user = this;
    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET)
    user.tokens = user.tokens.concat({token})
    await user.save();
    return token;
}
schema.plugin(mongoosePaginate);
const User = model("User",schema)
module.exports =User;
