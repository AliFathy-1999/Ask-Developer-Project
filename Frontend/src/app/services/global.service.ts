import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public isLoggedIn = false;
  public addquestionBtn:Boolean=true;
  public isLoggedOut = false;
  public isRegistered = false;
  public isHomePage:Boolean=false;
  public navbar:Boolean=true;
  public footer:Boolean=true;
  public userInfo:any={}
  public QuestionStatusED:Boolean=false;
  public QuestionStatusText="";
  public token = localStorage.getItem('token');
  public searchData:any = ""
  url:string="http://localhost:2000/api/user/"
  questionurl:string="http://localhost:2000/api/question/"
  answerurl:string="http://localhost:2000/api/answer/"
  constructor(private http:HttpClient,private router : Router) {

  }

  userRegister(obj:any){
    return this.http.post(`${this.url}userRegister`,obj);
  }
  userLogin(obj:any){
    return this.http.post(`${this.url}userLogin`,obj);
  }
  getMe(){
    return this.http.get(`${this.url}me`);
  }
  AuthLogin(){
    this.http.get(`${this.url}me`).subscribe(data=>{
      this.userInfo = data
      localStorage.setItem('userInfo',JSON.stringify(data))
    })
    return this.userInfo;
  }
  userLogout(){
    return this.http.get(`${this.url}logout`);
  }
  editprofile(obj:any){
    return this.http.post(`${this.url}editprofile`,obj)
  }
  uploadpImage(obj:any){
    return this.http.post(`${this.url}uploadimage`,obj)
  }
  addQuestion(obj:any){
    return this.http.post(`${this.questionurl}addquestion`,obj)
  }
  showAllQuestions(pageNum:number,limit:number){
    return this.http.get(`${this.questionurl}allquestions/${pageNum}/${limit}`)
  }
  showmyquestions(pageNum:number,limit:number){
    return this.http.get(`${this.questionurl}allmyquestions/${pageNum}/${limit}`)
  }
  EditQuestion(obj:any,id:any){
    return this.http.put(`${this.questionurl}editquestion/${id}`,obj)
  }
  DeleteQuestion(id:any){
    return this.http.delete(`${this.questionurl}/delquestion/${id}`)
  }
  SingleQuestion(id:any){
    return this.http.get(`${this.questionurl}singlequestion/${id}`)
  }
  viewQuestion(id:any){
    return this.http.put(`${this.questionurl}updateview/${id}`,null)
  }
  VotingonQuestion(id:any,vote:any){
    return this.http.put(`${this.questionurl}voting/${id}/${vote}`,null)
  }
  Search(obj:any,pageNum:number,limit:number){
    return this.http.post(`${this.questionurl}search/${pageNum}/${limit}/?searchText=${obj}`,obj)
  }
  AddAnswer(obj:any,questionId:any){
    return this.http.post(`${this.answerurl}addanswer/${questionId}`,obj)
  }
  getAllAnswer(id:any,pageNum:number,limit:number){
    return this.http.get(`${this.answerurl}getanswers/${id}/${pageNum}/${limit}`)
  }
  VotingonAnswer(id:any,userid:any,vote:any){
    return this.http.put(`${this.answerurl}votinganswer/${id}/${userid}/${vote}`,null)
  }
  AllUsers(pageNum:number,limit:number){
    return this.http.get(`${this.url}allusers/${pageNum}/${limit}`)
  }
  answerCount(id:any){
    return this.http.put(`${this.questionurl}countanswers/${id}`,null)
  }
  showmyanswers(pageNum:number,limit:number){
    return this.http.get(`${this.answerurl}allmyanswers/${pageNum}/${limit}`)
  }
  DeleteAnswer(qid:any,id:any){
    return this.http.delete(`${this.answerurl}delanswer/${qid}/${id}`)
  }
  EditAnswer(qid:any,id:any,obj:any){
    return this.http.put(`${this.answerurl}editanswer/${qid}/${id}`,obj)
  }
  SingleAnswer(id:any){
    return this.http.get(`${this.answerurl}answer/${id}`)
  }
  BookmarkQuestion(id:any){
    return this.http.post(`${this.questionurl}bookmark/${id}`,null)
  }
  GetMyBookmarks(pageNum:number,limit:number){
    return this.http.get(`${this.url}userbookmarks/${pageNum}/${limit}`)
  }
  UnBookmarkQuestion(id:any){
    return this.http.put(`${this.questionurl}unbookmark/${id}`,null)
  }
  GetUser(id:any){
    return this.http.get(`${this.url}user/${id}`)
  }
  GetAllTags(pageNum:number,limit:number){
    return this.http.get(`${this.questionurl}alltags/${pageNum}/${limit}`)
  }
  singleTag(tag:any,pageNum:number,limit:number){
    return this.http.get(`${this.questionurl}singletag/${tag}/${pageNum}/${limit}`)
  }
  sendEmail(obj:any){
    return this.http.post(`${this.url}sendverificationcode`,obj)
  }
  verifyCode(token:any,obj:any){
    return this.http.put(`${this.url}verifycode/${token}`,obj)
  }
  resetPassword(token:any,obj:any){
    return this.http.put(`${this.url}forgetpassword/${token}`,obj)
  }
  bestanswer(id:any,questionid:any){
    return this.http.put(`${this.answerurl}bestanswer/${id}/${questionid}`,null)
  }
}
