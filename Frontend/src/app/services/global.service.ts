import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public isLoggedIn = false;
  public navbar:Boolean=true;
  public userInfo:any={}

  url:string="http://localhost:1999/api/user/"
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
  testAuth(){
    return this.http.get(`${this.url}testauth`);
  }

}
