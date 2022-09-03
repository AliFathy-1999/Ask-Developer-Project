import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
@Component({
  selector: 'app-myanswers',
  templateUrl: './myanswers.component.html',
  styleUrls: ['./myanswers.component.css'],
  providers: [NgbModalConfig, NgbModal],
  styles: [`
  .modelColor .modal-content {
    background-color: #283149;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #A0C5DA;
  }
  .Modeltext{
    color:#A0C5DA;
  }
`]
})
export class MyanswersComponent implements OnInit {
  MyAnswers:any = [{}]
  MyQestions2:any = ["","","","","","","","","",""]
  public isCollapsed = false;
  isLoaded:boolean = false;
  isSubmitted:boolean = false;
  NoQuestions:boolean = false
  QuestionStatus:boolean = false
  showPagination:Boolean=true;
  page = 1;
  pageSize = 10;
  previousLabel:string = 'Prev';
  AnswerSize =  0;
  questions: any;
  collection = [{}];
  questionid:any;
  answerbody:any;
  p:any
  answerEditData:any = {}
  editanswerData:any = new FormGroup({
    body: new FormControl('', [Validators.required,Validators.minLength(6)]),
  });
  qid:any;
  id:any;
  editor:Editor=new Editor();
  html= "";
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
  constructor(config: NgbModalConfig, private modalService: NgbModal,private toastr:ToastrService,public _global: GlobalService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('show', sanitizer.bypassSecurityTrustHtml(this._icons.SHOW_ICON));
    iconRegistry.addSvgIconLiteral('success', sanitizer.bypassSecurityTrustHtml(this._icons.SUCCESS_ICON));
    iconRegistry.addSvgIconLiteral('edit', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('delete', sanitizer.bypassSecurityTrustHtml(this._icons.DELETE_ICON));
    iconRegistry.addSvgIconLiteral('error', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON2));
    iconRegistry.addSvgIconLiteral('save', sanitizer.bypassSecurityTrustHtml(this._icons.SAVE_ICON));
    config.backdrop = 'static';
    config.keyboard = false;
    config.animation = true;
    config.scrollable = true;
   }
   paginate(e:any){
    this.p = e;
  }
  get AnswerData(){
    return this.editanswerData.controls;
  }
  ngOnInit(): void {
    this.editor = new Editor();
    this._global.showmyanswers(this.page,this.pageSize).subscribe((data:any)=>{
      this.MyAnswers = data.data;
      this.AnswerSize = data.data.length;
      this.questionid = data.data._id;

      if(this.AnswerSize===0){
        this.NoQuestions=true;
        this.showPagination=false;
      }
    },(err:any)=>{
      location.reload()
    },()=>{
      this.isLoaded = true
    })
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  deleteanswer(QuestionId:any,id:any){
    this._global.DeleteAnswer(QuestionId,id).subscribe((data:any)=>{
      this.toastr.success('Answer Deleted Successfully', 'Success');
      this.ngOnInit();
    }),(err:any)=>{
      this.toastr.error('Something went wrong', 'Error');
    }
  }
  open(content:any,body:any,qid:any,id:any) {
    this.modalService.open(content, { size: 'xl',backdropClass: 'light-blue-backdrop' , windowClass: 'modelColor'} );

    this.answerbody = body;
        this.html = body;
      this.qid=qid;
      this.id=id;
      console.log("qid : "+ this.qid);
      console.log("id : "+ this.id);
  }
  handleAnswerEditSubmit(){
    console.log("ali")
    this.isSubmitted = true;

    //this.answerEditData.body = this.editanswerData.value.body;
    this._global.EditAnswer(this.qid,this.id,this.editanswerData.value).subscribe((data:any)=>{
      this.toastr.success('Answer Edited Successfully');
      this.ngOnInit();
    },(err:any)=>{
      this.toastr.error('Something went wrong', 'Error');
    })
  }


}
