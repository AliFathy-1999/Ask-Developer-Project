import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('home', sanitizer.bypassSecurityTrustHtml(this._icons.HOME_ICON));
    iconRegistry.addSvgIconLiteral('error', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON));
  }

  ngOnInit(): void {
  }

}
