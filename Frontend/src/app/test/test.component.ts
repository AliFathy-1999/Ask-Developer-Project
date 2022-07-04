import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import {  NgForm,FormsModule, FormControl, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  feedback:string="";
  token = localStorage.getItem("token");
  mydata={
    "fname":'',
    "lname":'',
    "username":'',
  };
  isLoaded = false
  constructor(public toastr:ToastrService,private _global:GlobalService) {
    this._global.navbar = false;

  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
     return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
 }
  ngOnInit(): void {
    if(this.token){
    this._global.testAuth().subscribe(data=>{
      console.log(data)
    })
  }
  }

  resetall(form:NgForm){
    form.resetForm();
     this.toastr.success("Form Reset Successfully!")
  }
  toast(){
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.toastr.info("Toastr Worked Successfully!")
    //this.toastr.success('Hello world!');
  }

}
