import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email:string="";
  userdata:any={
    email:"",
  };
  emailFormData:any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  constructor(public _global:GlobalService,private toastr: ToastrService) {
    this._global.navbar = false;
    this._global.footer=false;
   }
   get EmailData(){
    return this.emailFormData.controls;
  }
  ngOnInit(): void {
  }
  sendverificationcode(){
    this._global.sendEmail(this.emailFormData.value).subscribe(data=>{
      console.log(data)
      this.toastr.success("Verification code sent to your email, please check your email")
    },(err)=>{
      console.log(err)

      this.toastr.error(err.error.message)
      this.ngOnInit();
    },()=>{
      this.ngOnInit();
    })
  }
}
