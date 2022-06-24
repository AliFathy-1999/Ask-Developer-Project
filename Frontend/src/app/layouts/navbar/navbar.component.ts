import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('home', sanitizer.bypassSecurityTrustHtml(this._icons.HOME_ICON));
    iconRegistry.addSvgIconLiteral('tags', sanitizer.bypassSecurityTrustHtml(this._icons.TAGS_ICON));
    iconRegistry.addSvgIconLiteral('users', sanitizer.bypassSecurityTrustHtml(this._icons.USER_ICON));
    iconRegistry.addSvgIconLiteral('myquestions', sanitizer.bypassSecurityTrustHtml(this._icons.MYQUESTIONS_ICON));
    iconRegistry.addSvgIconLiteral('profile', sanitizer.bypassSecurityTrustHtml(this._icons.PROFILE_ICON));
    iconRegistry.addSvgIconLiteral('logout', sanitizer.bypassSecurityTrustHtml(this._icons.LOGOUT_ICON));
    iconRegistry.addSvgIconLiteral('login', sanitizer.bypassSecurityTrustHtml(this._icons.LOGIN_ICON));
    iconRegistry.addSvgIconLiteral('register', sanitizer.bypassSecurityTrustHtml(this._icons.REGISTRATION_ICON));
   }

  ngOnInit(): void {
  }

}
