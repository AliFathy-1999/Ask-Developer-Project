import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { ToastrModule } from 'ngx-toastr';
import { UserInterceptor } from './interceptors/user.interceptor';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AllmyquestionsComponent } from './question/allmyquestions/allmyquestions.component';
import { AddquestionComponent } from './question/addquestion/addquestion.component';
<<<<<<< HEAD
import { QuillModule } from 'ngx-quill'
import { QuillConfigModule } from 'ngx-quill/config';
import { Test2Component } from './test2/test2.component';
import { NgxEditorModule } from 'ngx-editor';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TagInputModule } from 'ngx-chips';
import {MatChipsModule} from '@angular/material/chips';
import { NgSelectModule } from '@ng-select/ng-select';
=======
//import { QuillModule } from 'ngx-quill'
//import { QuillConfigModule } from 'ngx-quill/config';

>>>>>>> origin
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    UserprofileComponent,
    AllmyquestionsComponent,
    AddquestionComponent,
<<<<<<< HEAD
    Test2Component,
=======
>>>>>>> origin

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgbModule,
<<<<<<< HEAD
    QuillModule,
    QuillConfigModule.forRoot({
      modules: {
        syntax: true,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          ['link', 'image', 'video']                         // link and image, video
        ]
      }
    }),
    NgxEditorModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
    TagInputModule,
    MatChipsModule,
    NgSelectModule
=======
    //QuillModule.forRoot()
>>>>>>> origin
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
