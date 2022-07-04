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
  token = localStorage.getItem('token')
  constructor(private _global: GlobalService, private router : Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    this._global.navbar = false;
   /* if(this.token) {
      this.router.navigateByUrl('/home')
    }*/
    iconRegistry.addSvgIconLiteral('login', sanitizer.bypassSecurityTrustHtml(this._icons.LOGIN_ICON));
    iconRegistry.addSvgIconLiteral('submit', sanitizer.bypassSecurityTrustHtml(this._icons.SUBMIT_ICON));
    iconRegistry.addSvgIconLiteral('register', sanitizer.bypassSecurityTrustHtml(this._icons.REGISTRATION_ICON));
    iconRegistry.addSvgIconLiteral('error', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON));
    iconRegistry.addSvgIconLiteral('error2', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON2));
   }

  ngOnInit(): void {

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
