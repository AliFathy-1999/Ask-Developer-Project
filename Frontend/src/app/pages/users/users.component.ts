import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  AllUsers:any = [{}]
  p:any
  loadingAnimation:any=["","","","","","","","","",""]
  isLoaded:boolean = false
  previousLabel:string = 'Prev';
  page = 0;
  pageSize = 10;
  constructor(private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,private toastr: ToastrService,public _global:GlobalService) {
    iconRegistry.addSvgIconLiteral('job', sanitizer.bypassSecurityTrustHtml(this._icons.JOBTITLE_ICON));
    iconRegistry.addSvgIconLiteral('location', sanitizer.bypassSecurityTrustHtml(this._icons.COUNTRY_ICON));
    iconRegistry.addSvgIconLiteral('vote', sanitizer.bypassSecurityTrustHtml(this._icons.VOTE_ICON));
  }



  ngOnInit(): void {
    this._global.AllUsers(this.page,this.pageSize).subscribe((data:any)=>{
      this.AllUsers=data.data
    }, (err:any)=>{
      location.reload()
    } , ()=>{
        this.isLoaded = true
    })
  }
  gotouserprofile(id:any){
    this.router.navigate(['/user',id])
  }

  paginate(e:any){
    this.p = e;
  }
  gotoTop(){
    window.scrollTo(0,0)
  }
}
