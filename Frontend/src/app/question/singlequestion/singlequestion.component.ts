import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import {  Validators  } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Editor, Toolbar, toHTML, toDoc} from 'ngx-editor';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-singlequestion',
  templateUrl: './singlequestion.component.html',
  styleUrls: ['./singlequestion.component.css']
})
export class SinglequestionComponent implements OnInit {
  Message:String="";
  votingArr:any=["","","","",""]
  isAnswer:boolean = false;
  userSuccess:boolean=false;
  questionsAnswers=[{}]
  Answers:any = [];
  questionIdParams=this.activated.snapshot.paramMap.get("id");
  isAuthor:boolean=false;
  isLoaded:boolean = false;
  oneClick:boolean=false;
  question:any = {};
  toEditQuestionPage:string=`/editquestion/${this.questionIdParams}`;
  answersCount:number = 0;
  constructor(private toastr:ToastrService,private activated : ActivatedRoute,private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,public _global:GlobalService) {
    iconRegistry.addSvgIconLiteral('addquestion', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('tags', sanitizer.bypassSecurityTrustHtml(this._icons.TAGS_ICON));
    iconRegistry.addSvgIconLiteral('answers', sanitizer.bypassSecurityTrustHtml(this._icons.ANSWERS_ICON));
    iconRegistry.addSvgIconLiteral('views', sanitizer.bypassSecurityTrustHtml(this._icons.VIEWS_ICON));
    iconRegistry.addSvgIconLiteral('votes', sanitizer.bypassSecurityTrustHtml(this._icons.VOTE_ICON));
    iconRegistry.addSvgIconLiteral('clock', sanitizer.bypassSecurityTrustHtml(this._icons.CLOCK_ICON));
    iconRegistry.addSvgIconLiteral('answer', sanitizer.bypassSecurityTrustHtml(this._icons.ANSWER_ICON));
    iconRegistry.addSvgIconLiteral('delete', sanitizer.bypassSecurityTrustHtml(this._icons.DELETE_ICON));
    iconRegistry.addSvgIconLiteral('success', sanitizer.bypassSecurityTrustHtml(this._icons.SUCCESS_ICON));
    iconRegistry.addSvgIconLiteral('arrowup2', sanitizer.bypassSecurityTrustHtml(this._icons.UP_ICON));
    iconRegistry.addSvgIconLiteral('arrowdown', sanitizer.bypassSecurityTrustHtml(this._icons.ARROW_DOWN_ICON));
    iconRegistry.addSvgIconLiteral('warning', sanitizer.bypassSecurityTrustHtml(this._icons.WARNING_ICON));
    iconRegistry.addSvgIconLiteral('reply', sanitizer.bypassSecurityTrustHtml(this._icons.REPLIES_ICON));
    iconRegistry.addSvgIconLiteral('info', sanitizer.bypassSecurityTrustHtml(this._icons.INFO_ICON));
   }
   toEditPage(id:any){
    this.router.navigateByUrl(`editquestion/${id}`);
   }
  ngOnInit(): void {
    this._global.SingleQuestion(this.questionIdParams).subscribe((data:any)=>{
      this.question= data.data;
      this.questionsAnswers=data.data.answers
      //console.log(data.data.answers[0]);
      //console.log(data.data.answers);
      this.questionsAnswers.forEach((answer:any)=>{
        this.Answers.push(answer);
      })
      this.answersCount=data.data.answers.length
      if(this.questionsAnswers.length>0){
        this.isAnswer = true;
      }
      if(this.question.userId===this._global.userInfo.data._id){
        this.isAuthor=true;
      }
      data.data.voters.forEach((element:any )=> {
        if(element === this._global.userInfo.data._id){
          this.oneClick=true;
        }
      })
    }, (err)=>{
      location.reload()
    } , ()=>{
        this.isLoaded = true
    })
  }
  deletequestion(obj:any){
    this._global.DeleteQuestion(obj).subscribe((data:any)=>{
      this.router.navigateByUrl('/home');
      this._global.QuestionStatusED=true;
      this._global.QuestionStatusText="Question Deleted Successfully";
      this.toastr.success('Question Deleted Successfully');
      setTimeout(()=>{
        this._global.QuestionStatusED=false;
      },3000)
    },(err)=>{
      this.toastr.error('Error in deleting Question');
    })
  }
  votingonQuestion(id:any,obj:any){
    this._global.VotingonQuestion(id,obj).subscribe((data:any)=>{
      this.userSuccess=true;
      this.Message="Voted Successfully";
      this.toastr.success('Voted Successfully');
      setTimeout(()=>{
        this.userSuccess=false;
        location.reload()
      },3000)


    },(err)=>{
      this.toastr.error('Error in voting on Question');
      location.reload()
    },()=>{
      this.isLoaded = true;
      this.isAuthor=true;
      this.oneClick=true;
    })
  }
}
