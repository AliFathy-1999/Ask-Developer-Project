import { Schema } from "mongoose";

interface IUserModel {
    fname: string;
    lname: string;
    email: string;
    password: string;
    username: string;
    phoneno: string;
    age: number;
    votes:number
    gender:string;
    DOB:Date,
    status: boolean;
    jobtitle: string;
    role: string;
    pImage: string;
    tokens: Array<string>;
    country:string;
    summary:string;
    answers:number;
    questions:number;
    bookmarks:Array<string>;
    socialmedia: Array<string>;
    facebookacc:Schema.Types.Mixed,
    twitteracc:Schema.Types.Mixed,
    githubacc:Schema.Types.Mixed,
    linkedinacc:Schema.Types.Mixed,
    website:Schema.Types.Mixed,
}
export { IUserModel };