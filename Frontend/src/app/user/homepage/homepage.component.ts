import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _global:GlobalService) {
    this._global.navbar = true
    this._global.isHomePage = true

   }

  ngOnInit(): void {
  }

}
