import { Component, OnInit, } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { IconsService } from 'src/app/services/icons.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data:any
  //myfname:any
  myfname:Boolean=false;
  token:any = localStorage.getItem('token')
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,public _global:GlobalService,private router:Router) {
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

    if(this.token){
      this._global.isLoggedIn=true;

      //this.myfname=true;
    }
  }
  logout(){
    this._global.userLogout().subscribe(data=>{
      let token2:any = localStorage.getItem('token');
      localStorage.clear();
      this.router.navigate(['/home']);
      this._global.addquestionBtn = false;
      this._global.isLoggedIn=false;
      this._global.isLoggedOut=true;
      setTimeout(()=>{
        this._global.isLoggedOut=false;
      },5000)



    })
  }

  }


