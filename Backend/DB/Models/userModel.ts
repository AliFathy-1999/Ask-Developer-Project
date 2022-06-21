import { error } from 'console';
import {Schema,model} from 'mongoose';
import validator from 'validator';
const bycryptjs = require('bcryptjs');
import { IUserModel } from '../../Interfaces/ModelsInterface';
const schema= new Schema<IUserModel>({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate(value:string)
        {
            if(!validator.isEmail(value))
            { 
                throw new Error("Email is invalid")
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value:string){
            if(value.includes("password")){
                throw new Error("Password cannot contain 'password'")
            }
        }
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
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
    jobtitle:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30,
        default:"Developer"
    },
    role:{
        type:String,
        default:"user"
    },
    /*tokens : [
        {
            token:{
                type:String,
                required:true
            }
        }
    ]*/
},{
    timestamps:true  //createdAt, updatedAt
});
schema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.__v;
    //delete userObject.tokens;
    return userObject;
}
schema.pre('save',async function (){
    const user = this;
    if(user.isModified("password")){
        user.password =await bycryptjs.hash(user.password,10)
    }
})
schema.statics.login = async function(email,password){
    const userData = await User.findOne({email});
    if(!userData){
        throw new Error("Invalid Email");
    }
    const isMatch= bycryptjs.compare(password,userData.password)
    if(!isMatch){
        throw new Error("Invalid Password");
    }
   return userData;
}
const User = model("User",schema)
module.exports =User;