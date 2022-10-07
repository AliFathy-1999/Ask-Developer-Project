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
  token = localStorage.getItem('token')
  routerLinkStatus:Boolean=false;
  routerlink:String="";

  constructor(public _global:GlobalService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _icons: IconsService,@Inject(DOCUMENT) public document: Document) {

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
  openModal(){
    if(this.token){
      this.routerLinkStatus=false;
      this.routerlink="/addquestion"
    }else if(!this.token){
      this.routerLinkStatus=true;
      this.routerlink=""
    }
   }
  getToTop(){
    window.scrollTo(0,0);
  }
}
