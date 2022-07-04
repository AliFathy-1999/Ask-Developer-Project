import { Component, OnInit, ElementRef, Inject, VERSION, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  NgForm,FormsModule  } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData={
    "fname":'',
    "lname":'',
    "age":'',
    "email":'',
    "password":'',
    "username":'',
    "phoneno":'',
    "gender":'',
    "jobtitle":''
  }
  userError:Boolean=false;
  ErrorMessage:string="";
  constructor(private _global: GlobalService, private router : Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    this._global.navbar = false;
    iconRegistry.addSvgIconLiteral('register', sanitizer.bypassSecurityTrustHtml(this._icons.REGISTRATION_ICON));
    iconRegistry.addSvgIconLiteral('submit', sanitizer.bypassSecurityTrustHtml(this._icons.SUBMIT_ICON));
    iconRegistry.addSvgIconLiteral('reset', sanitizer.bypassSecurityTrustHtml(this._icons.RESET_ICON));
    iconRegistry.addSvgIconLiteral('login', sanitizer.bypassSecurityTrustHtml(this._icons.LOGIN_ICON));
    iconRegistry.addSvgIconLiteral('error', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON));
    iconRegistry.addSvgIconLiteral('error2', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON2));
   }

  ngOnInit(): void {
  }
  handleSubmit(form:NgForm){
    this._global.userRegister(this.userData).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/login']);
    },(err)=>{
      this.userError=true;
      if(err.error.message.includes('duplicate')){
        if(err.error.message.includes('username') ){
          this.ErrorMessage="Username is used, please choose another one";
        }else if(err.error.message.includes('email') ){
          this.ErrorMessage="Email is used, please choose another one";
        }
    }else if(err.error.message.includes('validation failed') && err.error.message.includes('required')){
      this.ErrorMessage="Please fill all the fields";
    }else if(err.error.message.includes('Phone number is invalid')){
      this.ErrorMessage="Phone number is invalid, please enter a valid phone number";
    }else{
      this.ErrorMessage="Something went wrong, please try again";
    }

    });
}
  resetall(form:NgForm){
   form.resetForm();
}
}
