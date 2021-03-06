interface IUserModel {
    fname: string;
    lname: string;
    email: string;
    password: string;
    username: string;
    phoneno: string;
    age: number;
    gender:string;
    DOB:Date,
    status: boolean;
    jobtitle: string;
    role: string;
    pImage: string;
    tokens: Array<string>;
}
export { IUserModel };