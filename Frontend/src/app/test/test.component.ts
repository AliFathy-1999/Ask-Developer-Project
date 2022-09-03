import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  loadingAnimation:any=["","","","","","","","","",""]
  constructor(public _global: GlobalService,private toastr: ToastrService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('edit', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('profile', sanitizer.bypassSecurityTrustHtml(this._icons.PROFILE_ICON));
    iconRegistry.addSvgIconLiteral('name', sanitizer.bypassSecurityTrustHtml(this._icons.FULLNAME_ICON));
    iconRegistry.addSvgIconLiteral('dob', sanitizer.bypassSecurityTrustHtml(this._icons.DOB_ICON));
    iconRegistry.addSvgIconLiteral('gender', sanitizer.bypassSecurityTrustHtml(this._icons.GENDER_ICON));
    iconRegistry.addSvgIconLiteral('usern', sanitizer.bypassSecurityTrustHtml(this._icons.USERNAME_ICON));
    iconRegistry.addSvgIconLiteral('email', sanitizer.bypassSecurityTrustHtml(this._icons.EMAIL_ICON));
    iconRegistry.addSvgIconLiteral('country', sanitizer.bypassSecurityTrustHtml(this._icons.COUNTRY_ICON));
    iconRegistry.addSvgIconLiteral('phone', sanitizer.bypassSecurityTrustHtml(this._icons.PHONE_ICON));
    iconRegistry.addSvgIconLiteral('jobt', sanitizer.bypassSecurityTrustHtml(this._icons.JOB_ICON));
  }

  ngOnInit(): void {
  }

}
