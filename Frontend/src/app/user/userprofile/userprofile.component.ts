import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  token = localStorage.getItem('token');
  constructor(public _global: GlobalService, private router : Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('editprofile', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
  }

  ngOnInit(): void {

  }

}
