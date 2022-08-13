import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import {  Validators  } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Editor, Toolbar} from 'ngx-editor';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit, OnDestroy  {
  editor:Editor=new Editor();
  html= '';
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
  tags: any[] = [];
  isSubmitted:boolean = false;
  userError:boolean = false;
  ErrorMessage:string ="";
  programmingLanguages = ["assembly","android","ios","mac","windows","jasmine","Jest","JSON","firebase","mongooseDB","batchfile","c","c#","c++","clojure","tailwindcss","coffeescript","dart","elixir","emacs lisp","go","haskell","java","javascript",
  "julia","kotlin","lua","makefile","ocaml","objective-c","objective-c++","php","perl","python","rascal","ruby","rust","scala","shell","swift","tex","typescript","vim script","aim","aspnet","aws","actionscript","activerecord","ajax","algol","amazon","angular","apache","appstream","applescript","autohotkey","aviato","basic","backbone","bootstrap","bower","browserify","bundler","c","c+","c++","cobol","css3","canvas","capistrano","cassandra","cleardb","cloudformation","cloudfront","cloudsearch","cloudtrail","cloudwatch","codecommit","codedeploy","codepipeline","coffeescript","cognito","couchdb","crunchbang","csharp","cucumber","d3","dart","diaspora","discourse","django","drupal","dynamodb","ebs","ec2","ejs","erb","elacticbeanstalk","elasticsearch","elasticache","emacs","ember","erlang","express","fortran","ftp","facebook","fedora","flash","flickr","foundation","foursquare","gnuemacs","gnulinux","ghost","github","glacier","gmail","go","googledocs","googlemaps","graphenedb","grunt","html5","hacketyhack","hadoop","heroku","hipchat","icq","iftt","irb","irc","imagemagick","imgur","indiegogo","instagram","ironcache","jquery","java","javascript","jekyll","keenio","kickstarter","knockout","latex","leapmotion","leveldb","linux","lisp","lyft","mariadb","markdown","memcached","middleman","minitest","mocha","mongodb","mysql","nltk","npm","netflix","newrelic","nginx","nosql","node.js","nokogiri","oauth","ocr","ocaml","objective-c","octopress","oculusrift","opencv","opera","oracle","pgp","php","pip","pandora","passenger","perl","polymer","postgres","processing","pubnub","pushnotifications","python","quora","rack","rails","react","redhat","redis","refinery","route53","rspec","ruby","rust","ses","sns","sqs","ssh","swf","sails","scala","scheme","scratch","sendgrid","silverlight","sinatra","slack","solr","spoonrocket","spotify","sqlite","swift","tcp","tempodb","tumblr","twilio","twitter","uber","ubuweb","ubuntu","unicorn","vbscript","vim","visualbasic","webaudio","webrick","websockets","wolfram language","wordpress","xtags","yahoo","yelp","youtube","zepto",".ql"];
  uniquePL=[... new Set(this.programmingLanguages)].sort();

  upper = this.uniquePL.map(element => {
    return element[0].toUpperCase() + element.slice(1);
  });
  selectedCompanies: any  ;

  questionDataForm:any = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(6)]),
    body: new FormControl('',[Validators.required,Validators.minLength(6)]),
    tags: new FormControl('', [Validators.required]),
  });
  file:any
  constructor(private toastr: ToastrService,private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,private _global:GlobalService) {
    iconRegistry.addSvgIconLiteral('addquestion', sanitizer.bypassSecurityTrustHtml(this._icons.EDIT_ICON));
    iconRegistry.addSvgIconLiteral('submitquestion', sanitizer.bypassSecurityTrustHtml(this._icons.SEND_ICON));
    iconRegistry.addSvgIconLiteral('error', sanitizer.bypassSecurityTrustHtml(this._icons.ERROR_ICON2));

   }
   ngOnInit(): void {
    this.editor = new Editor();
    this.upper.forEach((p, i) => {
      this.tags.push(p);
  });
  }
  addTagFn(name:any) {
    return name;
}
  ngOnDestroy(): void {
    this.editor.destroy();
  }


  get QuestionData(){
    return this.questionDataForm.controls;
  }
  addquestion(){
    this.isSubmitted =true
    if(this.questionDataForm.valid){
    this._global.addQuestion(this.questionDataForm.value).subscribe((data:any)=>{
      this.toastr.success("Your question has been submitted Successfully!");
      if(data.error){
        this.userError = true;
        this.ErrorMessage = data.error;
        this.toastr.error(data.error);
      }else{
        this.router.navigate(['/home']);
      }
    },(err:any)=>{
      console.log(err.error)
      this.userError=true;
      this.ErrorMessage=err.error.message;
      if(err.error.message.includes('validation failed') && err.error.message.includes('required')){
        this.toastr.error("Please fill all the fields");
        this.ErrorMessage="Please fill all the fields"
      }else if(err.error.message.includes('title')){
        if(err.error.message.includes('validation failed') && err.error.message.includes('minlength')){
          this.toastr.error("Title should be atleast 6 characters long");
          this.ErrorMessage="Title should be atleast 6 characters long"
        }
      }else if(err.error.message.includes('body')){
        if(err.error.message.includes('validation failed') && err.error.message.includes('minlength')){
          this.toastr.error("Body should be atleast 6 characters long");
          this.ErrorMessage="Body should be atleast 6 characters long"
        }
      }

    })
  }
}

}
