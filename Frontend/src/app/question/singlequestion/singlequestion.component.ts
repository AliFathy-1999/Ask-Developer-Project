import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import {  Validators  } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Editor, Toolbar, toHTML, toDoc} from 'ngx-editor';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-singlequestion',
  templateUrl: './singlequestion.component.html',
  styleUrls: ['./singlequestion.component.css']
})
export class SinglequestionComponent implements OnInit {
  questionIdParams=this.activated.snapshot.paramMap.get("id");
  isAuthor:boolean=false;
  isLoaded:boolean = false;
  question:any = {};
  answersCount:number = 0;
  constructor(private activated : ActivatedRoute,private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,public _global:GlobalService) {
    iconRegistry.addSvgIconLiteral('addquestion', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('tags', sanitizer.bypassSecurityTrustHtml(this._icons.TAGS_ICON));
    iconRegistry.addSvgIconLiteral('answers', sanitizer.bypassSecurityTrustHtml(this._icons.ANSWERS_ICON));
    iconRegistry.addSvgIconLiteral('views', sanitizer.bypassSecurityTrustHtml(this._icons.VIEWS_ICON));
    iconRegistry.addSvgIconLiteral('votes', sanitizer.bypassSecurityTrustHtml(this._icons.VOTE_ICON));
    iconRegistry.addSvgIconLiteral('clock', sanitizer.bypassSecurityTrustHtml(this._icons.CLOCK_ICON));
    iconRegistry.addSvgIconLiteral('answer', sanitizer.bypassSecurityTrustHtml(this._icons.ANSWER_ICON));
    iconRegistry.addSvgIconLiteral('delete', sanitizer.bypassSecurityTrustHtml(this._icons.DELETE_ICON));
    iconRegistry.addSvgIconLiteral('arrowup', sanitizer.bypassSecurityTrustHtml(this._icons.ARROW_UP2_ICON));
    iconRegistry.addSvgIconLiteral('arrowdown', sanitizer.bypassSecurityTrustHtml(this._icons.ARROW_DOWN_ICON));
   }

  ngOnInit(): void {
    this._global.SingleQuestion(this.questionIdParams).subscribe((data:any)=>{
      this.question= data.data;
      if(this.question.userId===this._global.userInfo.data._id){
        this.isAuthor=true;
      }
    }, (err)=>{
      location.reload()
    } , ()=>{
        this.isLoaded = true
    })
  }

}
