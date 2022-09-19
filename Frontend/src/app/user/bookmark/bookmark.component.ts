import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  tags: string[] = ['Nodejs', 'Angular', 'Mongoose'];
  page = 0;pageSize = 10;p:any;isLoaded:boolean = false;MyBookmarks:any = [{}];previousLabel:string = 'Prev';NoBookmark:Boolean=false;
  Nopaginate:Boolean=true
  constructor(private toastr:ToastrService,private activated : ActivatedRoute,private router:Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,public _global:GlobalService) {
    iconRegistry.addSvgIconLiteral('bookmark', sanitizer.bypassSecurityTrustHtml(this._icons.BOOKMARK_ICON));
    iconRegistry.addSvgIconLiteral('info', sanitizer.bypassSecurityTrustHtml(this._icons.INFO_ICON));
    iconRegistry.addSvgIconLiteral('unbk', sanitizer.bypassSecurityTrustHtml(this._icons.UNBOOKMARK_ICON));
    iconRegistry.addSvgIconLiteral('bks', sanitizer.bypassSecurityTrustHtml(this._icons.BOOKMARKS_ICON));
    iconRegistry.addSvgIconLiteral('tags', sanitizer.bypassSecurityTrustHtml(this._icons.TAGS_ICON));
    iconRegistry.addSvgIconLiteral('vote', sanitizer.bypassSecurityTrustHtml(this._icons.VOTE_ICON));
    iconRegistry.addSvgIconLiteral('view', sanitizer.bypassSecurityTrustHtml(this._icons.VIEWS_ICON));
    iconRegistry.addSvgIconLiteral('answer', sanitizer.bypassSecurityTrustHtml(this._icons.ANSWERS_ICON));
   }

  ngOnInit(): void {
    this._global.GetMyBookmarks(this.page,this.pageSize).subscribe((data:any)=>{
      this.MyBookmarks = data.data.bookmarks;
      if(this.MyBookmarks.length === 0 ){
        this.NoBookmark=true
      }
      if(this.MyBookmarks.length < 10){
        this.Nopaginate=false
      }
    },(err:any)=>{
      this.toastr.error(err.error.message)
    },()=>{
      this.isLoaded = true
    })
  }
  paginate(e:any){
    this.p = e;
  }
  unbookmark(id:any){
    this._global.UnBookmarkQuestion(id).subscribe((data:any)=>{
      this.toastr.success("Question Unbookmarked Successfully")
      this.ngOnInit()
    },(err:any)=>{
      this.toastr.error(err.error.message)
    })
  }
  GotoQuestion(qId:any){
    this.router.navigate(['/singlequestion',qId])
  }
}
