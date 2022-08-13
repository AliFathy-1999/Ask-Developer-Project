import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  constructor(private http:HttpClient) {

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
  VotingonAnswer(id:any,vote:any){
    return this.http.put(`${this.answerurl}votinganswer/${id}/${vote}`,null)
  }
}
