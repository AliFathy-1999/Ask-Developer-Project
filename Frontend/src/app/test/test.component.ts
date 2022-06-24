import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  mydata:any;
  isLoaded = false
  constructor(private _global:GlobalService) {

   }

  ngOnInit(): void {
    this._global.getData().subscribe(data=>{
      this.mydata=data;
    }, (err)=>{
      console.log(err)
    } , ()=>{
      this.isLoaded = true
    })
  }

  // this._global.getData().subscribe(data=>{

  // });
}
