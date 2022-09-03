import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  AllQuestions:any = [{}]
  AllAnswers:any=[{}]
  loadingAnimation:any=["","","","",""]
  isLoaded:boolean = false
  answersCount:number = 0
  token = localStorage.getItem('token')
  collection = [{}];
  p:any
  previousLabel:string = 'Prev';
  page = 0;
  pageSize = 10;
  QuestionSize:number = 0
  routerLinkStatus:Boolean=false;
  routerlink:String="";
  answerCount:number = 0;
  constructor(private toastr: ToastrService,private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,public _global:GlobalService) {
    this._global.navbar = true
    this._global.isHomePage = true
    if(this.token){
      this._global.addquestionBtn = true
    }
    iconRegistry.addSvgIconLiteral('addquestion', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('tags', sanitizer.bypassSecurityTrustHtml(this._icons.TAGS_ICON));
    iconRegistry.addSvgIconLiteral('answers', sanitizer.bypassSecurityTrustHtml(this._icons.ANSWERS_ICON));
    iconRegistry.addSvgIconLiteral('views', sanitizer.bypassSecurityTrustHtml(this._icons.VIEWS_ICON));
    iconRegistry.addSvgIconLiteral('votes', sanitizer.bypassSecurityTrustHtml(this._icons.VOTE_ICON));
    iconRegistry.addSvgIconLiteral('clock', sanitizer.bypassSecurityTrustHtml(this._icons.CLOCK_ICON));
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
  ngOnInit(): void {
    this._global.showAllQuestions(this.page,this.pageSize).subscribe((data:any)=>{
          this.AllQuestions = data.data
        this.AllQuestions.forEach((question:any)=>{
          this._global.answerCount(question._id).subscribe((data:any)=>{
            this.answerCount = data.data
          })
          })
        }, (err:any)=>{
          // location.reload()
          this.ngOnInit()
        } , ()=>{
            this.isLoaded = true
        })

}
  incrementview(question_id:any){
    this._global.viewQuestion(question_id).subscribe((data:any)=>{
    },(err)=>{

    })
  }


  paginate(e:any){
    this.p = e;
  }
  gotoTop(){
    window.scrollTo(0,0)
  }
}
