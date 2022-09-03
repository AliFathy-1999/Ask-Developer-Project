import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-allmyquestions',
  templateUrl: './allmyquestions.component.html',
  styleUrls: ['./allmyquestions.component.css']
})
export class AllmyquestionsComponent {
  MyQestions:any = [{}]
  MyQestions2:any = ["","","","","","","","","",""]
  public isCollapsed = false;
  isLoaded:boolean = false;
  NoQuestions:boolean = false
  QuestionStatus:boolean = false
  showPagination:Boolean=true;
  page = 1;
  pageSize = 10;
  previousLabel:string = 'Prev';
  QuestionSize =  0;
  questions: any;
  collection = [{}];
  questionid:any;
  p:any
  constructor(private toastr:ToastrService,public _global: GlobalService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('show', sanitizer.bypassSecurityTrustHtml(this._icons.SHOW_ICON));
    iconRegistry.addSvgIconLiteral('success', sanitizer.bypassSecurityTrustHtml(this._icons.SUCCESS_ICON));
    iconRegistry.addSvgIconLiteral('edit', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('delete', sanitizer.bypassSecurityTrustHtml(this._icons.DELETE_ICON));
    iconRegistry.addSvgIconLiteral('error', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON2));
    iconRegistry.addSvgIconLiteral('questions', sanitizer.bypassSecurityTrustHtml(this._icons.QUESTIONS_ICON));
  }
  paginate(e:any){
    this.p = e;
  }
  ngOnInit(): void {
    this._global.showmyquestions(this.page,this.pageSize).subscribe((data:any)=>{
      this.MyQestions = data.data;
      this.QuestionSize = data.data.length;
      this.questionid = data.data._id;
      if(this.QuestionSize===0){
        this.NoQuestions=true;
        this.showPagination=false;
      }
    },(err:any)=>{
      location.reload()
    },()=>{
      this.isLoaded = true
    })
  }
  deletequestion(obj:any){
    this._global.DeleteQuestion(obj).subscribe((data:any)=>{
      location.reload()
      this.QuestionStatus=true
      this.toastr.success('Question Deleted Successfully');
    },(err)=>{
      console.log(err.error.message)
    })
  }

}
