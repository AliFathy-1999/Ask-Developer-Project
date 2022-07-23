import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  token = localStorage.getItem('token')
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,public _global:GlobalService) {
    this._global.navbar = true
    this._global.isHomePage = true

    if(this.token){
      this._global.addquestionBtn = true
    }
    iconRegistry.addSvgIconLiteral('addquestion', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('tags', sanitizer.bypassSecurityTrustHtml(this._icons.TAGS_ICON));
   }

  ngOnInit(): void {
  }

}
