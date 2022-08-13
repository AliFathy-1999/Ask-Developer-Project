import { Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { IconsService } from 'src/app/services/icons.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  data:any
  //myfname:any
  @Input() inputSearch: string="";
  searchData:any=""
  myfname:Boolean=false;
  isLoaded:boolean = false
  token:any = localStorage.getItem('token')
  searchdata:any={
    searchText: "",
  }
  constructor(private activatedRout: ActivatedRoute,private toastr: ToastrService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,public _global:GlobalService,private router:Router) {
    iconRegistry.addSvgIconLiteral('home', sanitizer.bypassSecurityTrustHtml(this._icons.HOME_ICON));
    iconRegistry.addSvgIconLiteral('tags', sanitizer.bypassSecurityTrustHtml(this._icons.TAGS_ICON));
    iconRegistry.addSvgIconLiteral('users', sanitizer.bypassSecurityTrustHtml(this._icons.USER_ICON));
    iconRegistry.addSvgIconLiteral('myquestions', sanitizer.bypassSecurityTrustHtml(this._icons.MYQUESTIONS_ICON));
    iconRegistry.addSvgIconLiteral('profile', sanitizer.bypassSecurityTrustHtml(this._icons.PROFILE_ICON));
    iconRegistry.addSvgIconLiteral('logout', sanitizer.bypassSecurityTrustHtml(this._icons.LOGOUT_ICON));
    iconRegistry.addSvgIconLiteral('login', sanitizer.bypassSecurityTrustHtml(this._icons.LOGIN_ICON));
    iconRegistry.addSvgIconLiteral('register', sanitizer.bypassSecurityTrustHtml(this._icons.REGISTRATION_ICON));
    iconRegistry.addSvgIconLiteral('search', sanitizer.bypassSecurityTrustHtml(this._icons.SEARCH_ICON));
   }
  ngOnChanges(changes: SimpleChanges): void {
    this._global.searchData =  this.inputSearch;
  }

  ngOnInit(): void {
      // this.activatedRout.queryParams.subscribe(res=>{
      //   console.log("queryParams : "+JSON.stringify(res)); //will give query params as an object
      // })
    if(this.token){
      this._global.isLoggedIn=true;
       this._global.addquestionBtn = true;
       this._global.getMe().subscribe(data=>{
         this._global.isLoggedIn=true;
         this._global.userInfo=data
         localStorage.setItem("userInfo",JSON.stringify(data));
       },(err)=>{
        location.reload()
       },()=>{
        if(this.token){
          this.isLoaded = true
        }
       })
      }

  }
  logout(){
    this._global.userLogout().subscribe(data=>{
      this.toastr.success("Logged out Successfully")
      let token2:any = localStorage.getItem('token');
      localStorage.clear();
      this.router.navigate(['/home']);
      this._global.addquestionBtn = false;
      this._global.isLoggedIn=false;
      this._global.isLoggedOut=true;
      setTimeout(()=>{
        this._global.isLoggedOut=false;
      },5000)



    })
  }

  }


