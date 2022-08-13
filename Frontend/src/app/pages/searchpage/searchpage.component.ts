import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit{
  AllQuestions:any = []
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
  pagination:boolean=true
  searchtText:any
  sValue: string[]=[];
  isSearch:boolean=false
  isNotSearch:boolean=true
  searchStatus = Array.of(localStorage.getItem('searchData'))
  data = new FormGroup({
    searchText:new FormControl('' , [Validators.required]),
  })
  get searchData(){
    return this.data.controls;
  }
  constructor(private activatedRout: ActivatedRoute,private toastr: ToastrService,private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,public _global:GlobalService) {
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
    iconRegistry.addSvgIconLiteral('info', sanitizer.bypassSecurityTrustHtml(this._icons.INFO_ICON));
  }


   handleSubmit(){

    this.activatedRout.queryParamMap.subscribe((res:any)=>{
      this.router.navigate(
        ['/search'],
        { queryParams: { searchText:  this.data.value.searchText },},

      );
    })
    this.activatedRout.queryParamMap.subscribe((res:any)=>{
      this.searchtText = res.params.searchText


    if(this.data.valid){
    this.isSearch = true
    this.isNotSearch = false
    this._global.Search(`[${res.params.searchText}]`,this.page,this.pageSize).subscribe((data:any)=>{
      this.AllQuestions = data.data
      localStorage.setItem('searchData',JSON.stringify(this.AllQuestions))
      if(this.AllQuestions.length >10){
        this.pagination = false;
      }
      this.toastr.success(data.message)

    }, (err:any)=>{
        //location.reload()
        this.toastr.error(err.error.message)
    } , ()=>{
        this.isLoaded = false
        this.isSearch = true
    })
  }
})
   }
  ngOnInit(): void {
    if(this.searchStatus){
      this.isSearch = true
    }
    // this.activatedRout.queryParamMap.subscribe((res:any)=>{
    //   this.seartText = res.params.searchText
    //   console.log(this.seartText);
    // })

  }
  incrementview(question_id:any){
    this._global.viewQuestion(question_id).subscribe((data:any)=>{
    },(err)=>{

    })
  }
  paginate(e:any){
    this.p = e;
  }

}
