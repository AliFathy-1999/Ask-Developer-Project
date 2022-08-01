import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  NgForm,FormsModule, FormControl, Validators, FormGroup  } from '@angular/forms';
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
  isSubmitted:boolean=false;
  data = new FormGroup({
    email:new FormControl('' , [Validators.required , Validators.email]),
    password:new FormControl('' , [Validators.required])
  })
  get LoginData(){
    return this.data.controls;
  }
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
    this._global.isHomePage=false;
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
  handleSubmit(){
    this.isSubmitted =true
    if(this.data.valid){
    this._global.userLogin(this.data.value).subscribe((data:any)=>{
      console.log(data);
      this.userToken=data['data']['token'];
        this.router.navigate(['/home']);
        localStorage.setItem("token",`bearer ${this.userToken}`) ;
  },(err:any)=>{
      this.userError=true;
      this.ErrorMessage=err;
      if(err){
        this.ErrorMessage="Invalid Email or Password"
      }


  });
    }
}
}
