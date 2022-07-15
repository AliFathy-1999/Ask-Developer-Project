import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  NgForm,FormsModule  } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData={
    "email":'',
    "password":'',
  }
  userToken:any;
  userError:Boolean=false;
  ErrorMessage:string="";
  status:string="show";
  passwordstatus:any="password"
  token = localStorage.getItem('token')
  constructor(public _global: GlobalService, private router : Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    this._global.navbar = false;
    this._global.footer=false;

    iconRegistry.addSvgIconLiteral('login', sanitizer.bypassSecurityTrustHtml(this._icons.LOGIN_ICON));
    iconRegistry.addSvgIconLiteral('submit', sanitizer.bypassSecurityTrustHtml(this._icons.SUBMIT_ICON));
    iconRegistry.addSvgIconLiteral('register', sanitizer.bypassSecurityTrustHtml(this._icons.REGISTRATION_ICON));
    iconRegistry.addSvgIconLiteral('error', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON));
    iconRegistry.addSvgIconLiteral('error2', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON2));
    iconRegistry.addSvgIconLiteral('success', sanitizer.bypassSecurityTrustHtml(this._icons.SUCCESS_ICON));
    iconRegistry.addSvgIconLiteral('show', sanitizer.bypassSecurityTrustHtml(this._icons.SHOW_ICON));
    iconRegistry.addSvgIconLiteral('hide', sanitizer.bypassSecurityTrustHtml(this._icons.HIDE_ICON));
   }

  ngOnInit(): void {

  }
  showpassword(){
    if(this.status=="show"){
      this.status="hide";
      this.passwordstatus="text";
    }
    else if( this.status=="hide"){
      this.status="show";
      this.passwordstatus="password";
    }
  }
  handleSubmit(form:NgForm){

    this._global.userLogin(this.userData).subscribe((data:any)=>{
      this.userToken=data['data']['token'];
        this.router.navigate(['/home']);
        localStorage.setItem("token",`bearer ${this.userToken}`) ;
  },(err)=>{

      this.userError=true;
      this.ErrorMessage=err.error.message;
      if(this.userData.email=='' || this.userData.password==''){
        this.ErrorMessage="Please fill all the fields. ";
      }else{
        this.ErrorMessage="Invalid email or password";
      }


  });

}
}
