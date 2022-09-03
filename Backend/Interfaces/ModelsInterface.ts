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
    //answersCount:number;
}
export { IUserModel };