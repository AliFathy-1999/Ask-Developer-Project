import { Component, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from './services/icons.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  isScrolled: boolean = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _icons: IconsService,@Inject(DOCUMENT) public document: Document) {
    iconRegistry.addSvgIconLiteral('arrowup', sanitizer.bypassSecurityTrustHtml(this._icons.ARROW_UP_ICON));
    this.document.addEventListener('scroll', () => {
      if (window.pageYOffset > 10) {
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
