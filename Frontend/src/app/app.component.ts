import { Component, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from './services/icons.service';
import { DOCUMENT } from '@angular/common';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ask Developer Website';
  isScrolled: boolean = false;

  constructor(public _global:GlobalService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _icons: IconsService,@Inject(DOCUMENT) public document: Document) {
   let token = localStorage.getItem("token");
   if(token){

    this._global.getMe().subscribe(data=>{
      this._global.isLoggedIn=true;
      this._global.userInfo=data
      localStorage.setItem("userInfo",JSON.stringify(data));
    })
   }
    iconRegistry.addSvgIconLiteral('arrowup', sanitizer.bypassSecurityTrustHtml(this._icons.ARROW_UP_ICON));
    iconRegistry.addSvgIconLiteral('logout', sanitizer.bypassSecurityTrustHtml(this._icons.LOGOUT_ICON));
    iconRegistry.addSvgIconLiteral('success', sanitizer.bypassSecurityTrustHtml(this._icons.SUCCESS_ICON));
    iconRegistry.addSvgIconLiteral('add', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    this.document.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    })
  }
  getToTop(){
    window.scrollTo(0,0);
  }
}
