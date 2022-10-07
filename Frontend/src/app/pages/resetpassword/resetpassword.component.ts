import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  newpassword:any = new FormGroup({
    password: new FormControl('', [Validators.required,Validators.maxLength(6)]),
  })
  token:any
  token_id= this.activatedRoute.queryParams.subscribe(params => {this.token = params['token_id']; })
  public postionToolTip:any="above";
  status:string="show";
  passwordstatus:any="password"
  constructor(public activatedRoute:ActivatedRoute,public router:Router,public _global:GlobalService,private toastr: ToastrService,private _formBuilder: FormBuilder,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    this._global.navbar = false;
    this._global.footer=false;
    iconRegistry.addSvgIconLiteral('verify', sanitizer.bypassSecurityTrustHtml(this._icons.VERRIFIED_ICON));
    iconRegistry.addSvgIconLiteral('resetpass', sanitizer.bypassSecurityTrustHtml(this._icons.RESETPASSWORD_ICON));
    iconRegistry.addSvgIconLiteral('donepass', sanitizer.bypassSecurityTrustHtml(this._icons.CHANGEDONE_ICON));
    iconRegistry.addSvgIconLiteral('show', sanitizer.bypassSecurityTrustHtml(this._icons.SHOW_ICON));
    iconRegistry.addSvgIconLiteral('hide', sanitizer.bypassSecurityTrustHtml(this._icons.HIDE_ICON));
    iconRegistry.addSvgIconLiteral('verified', sanitizer.bypassSecurityTrustHtml(this._icons.VERIFYING_ICON));
    iconRegistry.addSvgIconLiteral('unverified', sanitizer.bypassSecurityTrustHtml(this._icons.UNVERIFIED_ICON));
   }

  ngOnInit(): void {
  }
  resetpassword(){
    this._global.resetPassword(this.token,this.newpassword.value).subscribe((data:any)=>{
        this.toastr.success(data.message);
        this.router.navigate(['/login']);
    },(err:any)=>{
      this.toastr.error(err.error.message);
    },()=>{
      this.newpassword.reset();
    })
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
}
