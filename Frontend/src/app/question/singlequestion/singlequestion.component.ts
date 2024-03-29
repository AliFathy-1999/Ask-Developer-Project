import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import {  Validators  } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Editor, Toolbar} from 'ngx-editor';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-singlequestion',
  templateUrl: './singlequestion.component.html',
  styleUrls: ['./singlequestion.component.css']
})
export class SinglequestionComponent implements OnInit,OnDestroy {
  Message:String="";
  bookmarkStatus:boolean=false;
  votingArr:any=["","","","",""]
  isAnswer:boolean = false;
  userSuccess:boolean=false;
  questionsAnswers=[{}]
  Answers:any = [];
  questionIdParams=this.activated.snapshot.paramMap.get("id");
  isAuthor:boolean=false;
  isLoaded:boolean = false;
  oneClick:boolean=false;
  isAuthorAnswer:boolean=false;
  oneClickAnswer:boolean=false;
  question:any = {};
  answers:any = {};
  AllAnswers:any = [{}]
  voters:any=[]
  isbestAnswer:boolean=false;
  bookmarkers:any=[]
  Avoters:any=[]
  toEditQuestionPage:string=`/editquestion/${this.questionIdParams}`;
  answersCount:number = 0;
  editor:Editor=new Editor();
  html= '';
  p:any
  previousLabel:string = 'Prev';
  page = 0;
  pageSize = 10;
  QuestionSize:number = 0
  answerCount:number = 0;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  isSubmitted:Boolean = false;
  userid:any;
  answerDataForm:any = new FormGroup({
    body: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });
  websiteUrl:String = `${window.location.href}`
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
    iconRegistry.addSvgIconLiteral('send', sanitizer.bypassSecurityTrustHtml(this._icons.SEND_ICON));
    iconRegistry.addSvgIconLiteral('bookmark', sanitizer.bypassSecurityTrustHtml(this._icons.BOOKMARK_ICON));
    iconRegistry.addSvgIconLiteral('best', sanitizer.bypassSecurityTrustHtml(this._icons.BESTANSWER_ICON));

   }

   toEditPage(id:any){
    this.router.navigateByUrl(`editquestion/${id}`);
   }
  ngOnInit(): void {
    this.editor = new Editor();
    this._global.SingleQuestion(this.questionIdParams).subscribe((data:any)=>{
      this.bookmarkers=data.data.bookmarker;
      this.question= data.data;

      this.voters=data.data.voters
      this.voters.forEach((voter:any)=>{
        if(voter === this._global.userInfo?.data._id){
          this.oneClick=true;
        }
      })
      this.bookmarkers.forEach((bookmarker:any)=>{
        if(bookmarker === this._global?.userInfo?.data._id){
          this.bookmarkStatus=true;
        }
      })
      this._global.answerCount(this.question._id).subscribe((data:any)=>{
        this.answerCount = data.data
      })

      if(this.question.userId===this._global.userInfo.data._id){
        this.isAuthor=true;
      }
    }, (err)=>{
      location.reload()
    } , ()=>{
        this.isLoaded = true
    })
    this._global.getAllAnswer(this.questionIdParams,this.page,this.pageSize).subscribe((data:any)=>{
      this.AllAnswers= data.data;
      this.Avoters=data.data.voters
      this.AllAnswers.forEach((answer:any)=>{
        if(answer.bestanswer === true){
          this.isbestAnswer=true;
        }
      })
      if(this.AllAnswers.bestanswer){
        console.log(this.AllAnswers.bestanswer)
        this.isbestAnswer=true;
      }
      this.Avoters?.forEach((voter:any)=>{
        if(voter === this._global.userInfo.data._id){
          this.oneClickAnswer=true;
          this.isAuthorAnswer=true;

        }
      })
      if(this.AllAnswers.length>0){
        this.isAnswer = false;

      }
      if(this.AllAnswers.userId===this._global.userInfo.data._id){
        this.isAuthorAnswer=true;
      }
    }, (err)=>{
      location.reload()
    } , ()=>{
        this.isLoaded = true
    })

  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  get AnswerData(){
    return this.answerDataForm.controls;
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
      this.toastr.error(err.error.message);
      location.reload()
    },()=>{
      this.isLoaded = true;
      this.isAuthor=true;
      this.oneClick=true;
    })
  }
  addanswer(id:any){
    this.isSubmitted =true
    if(this.answerDataForm.valid){
      this._global.AddAnswer(this.answerDataForm.value,id).subscribe((data:any)=>{
        this.toastr.success("Your answer has been added Successfully!");
        location.reload();
        if(data.error){
          this.toastr.error(data.error);
        }else{
          this.router.navigate([`/singlequestion/${id}`]);
        }

      },(err:any)=>{
       this.toastr.error(err.error.message);
      })
  }
}
votingonAnswer(id:any,userid:any,obj:any){
  this._global.VotingonAnswer(id,userid,obj).subscribe((data:any)=>{
    if(userid===this._global.userInfo.data._id){
      this.oneClickAnswer=true;
      this.isAuthorAnswer=true;
    }
    this.toastr.success('Voted on answer Successfully');
      location.reload()
  },(err)=>{
    this.toastr.error(err.error.message);
    //location.reload()
  },()=>{
    this.isLoaded = true;
    this.isAuthorAnswer=true;
    this.oneClickAnswer=true;
  })
}
BookmarkQuestion(id:any){
  this._global.BookmarkQuestion(id).subscribe((data:any)=>{
    this.toastr.success('Question Bookmarked Successfully');
    this.bookmarkStatus=true;

  },(err)=>{
    this.toastr.error(err.error.message);
  })

}
BestAnswer(id:any){
  this._global.bestanswer(id,this.questionIdParams).subscribe((data:any)=>{
    this.toastr.success(data.message);
    this.ngOnInit();
  },(err)=>{
    this.toastr.error(err.error.message);
  },()=>{
    this.isLoaded = true;
  })
}
paginate(e:any){
  this.p = e;
}
gotouserprofile(id:any){
  this.router.navigate(['/user',id])
}
}
