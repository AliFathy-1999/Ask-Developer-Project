import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  isLoaded:boolean = false;
  count:number = 0;
  NoSocial:boolean = false;
  isSocial:boolean = false;
  userdata:any={};
  userIdParams=this.activated.snapshot.paramMap.get("id");
  constructor(private activated : ActivatedRoute,private toastr: ToastrService,public _global: GlobalService, private router : Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('editprofile', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('info', sanitizer.bypassSecurityTrustHtml(this._icons.INFO_ICON));
    iconRegistry.addSvgIconLiteral('error2', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON2));
    iconRegistry.addSvgIconLiteral('edit', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('save', sanitizer.bypassSecurityTrustHtml(this._icons.SAVE_ICON));
    iconRegistry.addSvgIconLiteral('edit', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('uploadpic', sanitizer.bypassSecurityTrustHtml(this._icons.UPLOAD_IMAGE_ICON));
    iconRegistry.addSvgIconLiteral('warn', sanitizer.bypassSecurityTrustHtml(this._icons.WARNING_ICON));
    iconRegistry.addSvgIconLiteral('success', sanitizer.bypassSecurityTrustHtml(this._icons.SUCCESS_ICON));
    iconRegistry.addSvgIconLiteral('name', sanitizer.bypassSecurityTrustHtml(this._icons.FULLNAME_ICON));
    iconRegistry.addSvgIconLiteral('dob', sanitizer.bypassSecurityTrustHtml(this._icons.DOB_ICON));
    iconRegistry.addSvgIconLiteral('gender', sanitizer.bypassSecurityTrustHtml(this._icons.GENDER_ICON));
    iconRegistry.addSvgIconLiteral('usern', sanitizer.bypassSecurityTrustHtml(this._icons.USERNAME_ICON));
    iconRegistry.addSvgIconLiteral('email', sanitizer.bypassSecurityTrustHtml(this._icons.EMAIL_ICON));
    iconRegistry.addSvgIconLiteral('country', sanitizer.bypassSecurityTrustHtml(this._icons.COUNTRY_ICON));
    iconRegistry.addSvgIconLiteral('phone', sanitizer.bypassSecurityTrustHtml(this._icons.PHONE_ICON));
    iconRegistry.addSvgIconLiteral('jobt', sanitizer.bypassSecurityTrustHtml(this._icons.JOB_ICON));
    iconRegistry.addSvgIconLiteral('about', sanitizer.bypassSecurityTrustHtml(this._icons.ABOUTME_ICON));
    iconRegistry.addSvgIconLiteral('statistics', sanitizer.bypassSecurityTrustHtml(this._icons.STATISTICS_ICON));
    iconRegistry.addSvgIconLiteral('socialmedia', sanitizer.bypassSecurityTrustHtml(this._icons.SOCIAL_ICON));
    iconRegistry.addSvgIconLiteral('facebook', sanitizer.bypassSecurityTrustHtml(this._icons.FACEBOOK_ICON));
    iconRegistry.addSvgIconLiteral('twitter', sanitizer.bypassSecurityTrustHtml(this._icons.TWITTER_ICON));
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(this._icons.GETHUB_ICON));
    iconRegistry.addSvgIconLiteral('website', sanitizer.bypassSecurityTrustHtml(this._icons.WEBSITE_ICON));
    iconRegistry.addSvgIconLiteral('linkedin', sanitizer.bypassSecurityTrustHtml(this._icons.LINKEDIN_ICON));
    iconRegistry.addSvgIconLiteral('unknown', sanitizer.bypassSecurityTrustHtml(this._icons.UNKNOWNLINK_ICON));

   }

  ngOnInit(): void {
    this._global.GetUser(this.userIdParams).subscribe((data:any) => {
      this.userdata = data.data;
      if(this.userdata.socialmedia.length == 0){
        this.NoSocial = true;
      }
      else{
        this.isSocial = true;
      }
    },(err:any) => {
      this.toastr.error(err.error.message);
      this.ngOnInit();
    },()=>{
      this.isLoaded = true;
    })
  }

}
