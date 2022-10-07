import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  AllTags:any = []
  tagSize:any = 0;
  // tagSize(tag:any){
  //   if(tag.length > 20){
  //     return tag.substring(0,20) + '...'
  //   }else{
  //     return tag
  //   }
  // }
  p:any
  loadingAnimation:any=["","","","","","","","","",""]
  isLoaded:boolean = false
  previousLabel:string = 'Prev';
  //page = 0;
  page = 0;
  pageSize = 10;
  //:/pageNum/:limit

  constructor(private activated : ActivatedRoute,private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,private toastr: ToastrService,public _global:GlobalService) {
    iconRegistry.addSvgIconLiteral('job', sanitizer.bypassSecurityTrustHtml(this._icons.JOBTITLE_ICON));
    iconRegistry.addSvgIconLiteral('location', sanitizer.bypassSecurityTrustHtml(this._icons.COUNTRY_ICON));
    iconRegistry.addSvgIconLiteral('vote', sanitizer.bypassSecurityTrustHtml(this._icons.VOTE_ICON));
    iconRegistry.addSvgIconLiteral('tag', sanitizer.bypassSecurityTrustHtml(this._icons.TAGS_ICON));

   }

  ngOnInit(): void {
    //console.log("new "+this.pageN)
    this._global.GetAllTags(this.page,this.pageSize).subscribe((data:any)=>{
      this.AllTags=data.data
      this.tagSize = data.tagslength
      console.log(this.tagSize)
    }, (err:any)=>{
      location.reload()
    } , ()=>{
        this.isLoaded = true
    })
  }
  gotouserprofile(id:any){
    this.router.navigate(['/tags/tagged',id])
  }
  goToSingleTag(tag:any){
    this.router.navigate(['/tags/tagged',tag])
  }
  paginate(e:any){
    this.p = e;
    console.log(this.p)
  }
  gotoTop(){
    window.scrollTo(0,0)
  }
}
