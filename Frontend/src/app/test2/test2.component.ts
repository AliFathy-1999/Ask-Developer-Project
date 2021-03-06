import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl, NgForm,FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import {  Validators  } from '@angular/forms';
import { Editor, Toolbar, toHTML} from 'ngx-editor';
import { Router } from '@angular/router';
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  editor:Editor=new Editor();

  title = 'ngx-skeleton-loader-demo';

  animation = 'pulse';
  contentLoaded = false;
  count = 2;
  widthHeightSizeInPixels = 50;

  intervalId: number | null = null;
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
  people$: any;
  selectedPeople = ["New person", "New person2", "New person3"];

  selectedCar: any;
  imageUrl1: string = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
  imageUrl2: string = 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  imageUrl3: string = 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  imageUrl4: string = 'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  imageUrl5: string = 'https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=476&q=80';
  imageUrl6: string = 'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80';
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  items = ['Pizza', 'Pasta', 'Parmesan'];
  myform=[
    {
    }
  ]
  keywords = new Set(['angular', 'how-to', 'tutorial']);
  formControl = new FormControl(['angular']);
  tags: any[] = [];
  isSubmitted:boolean = false;
  userError:boolean = false;
  ErrorMessage:string ="";
  programmingLanguages = ["assembly","batchfile","c","c#","c++","clojure","tailwindcss","coffeescript","dart","elixir","emacs lisp","go","haskell","java","javascript",
  "julia","kotlin","lua","makefile","ocaml","objective-c","objective-c++","php","perl","python","rascal","ruby","rust","scala","shell","swift","tex","typescript","vim script","aim","aspnet","aws","actionscript","activerecord","ajax","algol","amazon","angular","apache","appstream","applescript","autohotkey","aviato","basic","backbone","bootstrap","bower","browserify","bundler","c","c+","c++","cobol","css3","canvas","capistrano","cassandra","cleardb","cloudformation","cloudfront","cloudsearch","cloudtrail","cloudwatch","codecommit","codedeploy","codepipeline","coffeescript","cognito","couchdb","crunchbang","csharp","cucumber","d3","dart","diaspora","discourse","django","drupal","dynamodb","ebs","ec2","ejs","erb","elacticbeanstalk","elasticsearch","elasticache","emacs","ember","erlang","express","fortran","ftp","facebook","fedora","flash","flickr","foundation","foursquare","gnuemacs","gnulinux","ghost","github","glacier","gmail","go","googledocs","googlemaps","graphenedb","grunt","html5","hacketyhack","hadoop","heroku","hipchat","icq","iftt","irb","irc","imagemagick","imgur","indiegogo","instagram","ironcache","jquery","jasmine","java","javascript","jekyll","keenio","kickstarter","knockout","latex","leapmotion","leveldb","linux","lisp","lyft","mariadb","markdown","memcached","middleman","minitest","mocha","mongodb","mysql","nltk","npm","netflix","newrelic","nginx","nosql","node.js","nokogiri","oauth","ocr","ocaml","objective-c","octopress","oculusrift","opencv","opera","oracle","pgp","php","pip","pandora","passenger","perl","polymer","postgres","processing","pubnub","pushnotifications","python","quora","rack","rails","react","redhat","redis","refinery","route53","rspec","ruby","rust","ses","sns","sqs","ssh","swf","sails","scala","scheme","scratch","sendgrid","silverlight","sinatra","slack","solr","spoonrocket","spotify","sqlite","swift","tcp","tempodb","tumblr","twilio","twitter","uber","ubuweb","ubuntu","unicorn","vbscript","vim","visualbasic","webaudio","webrick","websockets","wolfram language","wordpress","xtags","yahoo","yelp","youtube","zepto",".ql"];
  uniquePL=[... new Set(this.programmingLanguages)].sort();

  upper = this.uniquePL.map(element => {
    return element[0].toUpperCase() + element.slice(1);
  });
  selectedCompanies: any  ;
  questionDataForm:any = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(300)]),
    body: new FormControl('',[Validators.required,Validators.minLength(6)]),
    tags: new FormControl('', [Validators.required]),
  });
  html = toHTML(this.questionDataForm.body.value);
  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  constructor(public toastr:ToastrService,public _global:GlobalService,public router:Router) { }

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
  ngOnInit(): void {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);

    this.intervalId = window.setInterval(() => {
      this.animation = this.animation === 'pulse' ? 'progress-dark' : 'pulse';
      this.count = this.count === 2 ? 5 : 2;
      this.widthHeightSizeInPixels =
        this.widthHeightSizeInPixels === 50 ? 100 : 50;
    }, 5000);
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
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  get QuestionData(){
    return this.questionDataForm.controls;
  }
  addquestion(){
    this.isSubmitted =true
    if(this.questionDataForm.valid){
    this._global.addQuestion(this.questionDataForm.value).subscribe((data:any)=>{
      //this.router.navigate(['/question/'+data.id]);
      if(data.error){
        this.userError = true;
        this.ErrorMessage = data.error;
      }else{
        this.router.navigate(['/home']);
      }
    },(err:any)=>{
      console.log(err.error)
      this.userError=true;
      this.ErrorMessage=err.error.message;
      if(err.error.message.includes('validation failed') && err.error.message.includes('required')){
        this.ErrorMessage="Please fill all the fields"
      }else if(err.error.message.includes('title')){
        if(err.error.message.includes('validation failed') && err.error.message.includes('minlength')){
          this.ErrorMessage="Title should be atleast 6 characters long"
        }else if(err.error.message.includes('validation failed') && err.error.message.includes('maxlength')){
          this.ErrorMessage="Title should be atmost 300 characters long"
        }
      }else if(err.error.message.includes('body')){
        if(err.error.message.includes('validation failed') && err.error.message.includes('minlength')){
          this.ErrorMessage="Body should be atleast 6 characters long"
        }
      }

    })
  }
}
}
