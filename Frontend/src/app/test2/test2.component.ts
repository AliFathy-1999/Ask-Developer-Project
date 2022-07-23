import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  people$: any;
  selectedPeople = ["New person", "New person2", "New person3"];

  selectedCar: any;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  editor:any;
  html= '';
  items = ['Pizza', 'Pasta', 'Parmesan'];
  myform=[
    {
    }
  ]
  keywords = new Set(['angular', 'how-to', 'tutorial']);
  formControl = new FormControl(['angular']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  constructor(public toastr:ToastrService) {

   }
   addOnBlur = true;
   readonly separatorKeysCodes = [ENTER, COMMA] as const;
   fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

   add(event: MatChipInputEvent): void {
     const value = (event.value || '').trim();

     // Add our fruit
     if (value) {
       this.fruits.push({name: value});
     }

     // Clear the input value
     event.chipInput!.clear();
   }

   remove(fruit: Fruit): void {
     const index = this.fruits.indexOf(fruit);

     if (index >= 0) {
       this.fruits.splice(index, 1);
     }
   }
   testt(form:NgForm){

   }
   clearModel() {
    this.selectedPeople = [];
}

changeModel() {
    this.selectedPeople = ['New person' ];
}
  /*ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }*/
}
