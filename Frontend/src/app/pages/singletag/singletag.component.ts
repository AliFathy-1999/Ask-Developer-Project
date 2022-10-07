import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-singletag',
  templateUrl: './singletag.component.html',
  styleUrls: ['./singletag.component.css']
})
export class SingletagComponent implements OnInit {
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
  tagParams=this.activated.snapshot.paramMap.get("tag");
  constructor(private activated : ActivatedRoute,private toastr: ToastrService,private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,public _global:GlobalService) {
    iconRegistry.addSvgIconLiteral('addquestion', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('tags', sanitizer.bypassSecurityTrustHtml(this._icons.TAGS_ICON));
    iconRegistry.addSvgIconLiteral('answers', sanitizer.bypassSecurityTrustHtml(this._icons.ANSWERS_ICON));
    iconRegistry.addSvgIconLiteral('views', sanitizer.bypassSecurityTrustHtml(this._icons.VIEWS_ICON));
    iconRegistry.addSvgIconLiteral('votes', sanitizer.bypassSecurityTrustHtml(this._icons.VOTE_ICON));
    iconRegistry.addSvgIconLiteral('clock', sanitizer.bypassSecurityTrustHtml(this._icons.CLOCK_ICON));
  }

  ngOnInit(): void {
    this._global.singleTag(this.tagParams,this.page,this.pageSize).subscribe((data:any)=>{
      this.AllQuestions = data.data
      this.AllQuestions.forEach((question:any)=>{
        this._global.answerCount(question._id).subscribe((data:any)=>{
          this.answerCount = data.data
        })
      })
    }, (err:any)=>{
      // location.reload()
      this.ngOnInit()
    },()=>{
      this.isLoaded = true
    })
  }
  incrementview(question_id:any){
    this._global.viewQuestion(question_id).subscribe((data:any)=>{
    },(err)=>{

    })
  }
  gotouserprofile(id:any){
    this.router.navigate(['/user',id])
  }
  gotoQuestion(id:any){
    this.router.navigate(['/singlequestion',id])
  }
  paginate(e:any){
    this.p = e;
  }
  gotoTop(){
    window.scrollTo(0,0)
  }
}
