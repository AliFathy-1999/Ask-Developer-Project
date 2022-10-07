import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { ToastrModule } from 'ngx-toastr';
import { UserInterceptor } from './interceptors/user.interceptor';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AllmyquestionsComponent } from './question/allmyquestions/allmyquestions.component';
import { AddquestionComponent } from './question/addquestion/addquestion.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxEditorModule } from 'ngx-editor';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {MatChipsModule} from '@angular/material/chips';
import { NgSelectModule } from '@ng-select/ng-select';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SinglequestionComponent } from './question/singlequestion/singlequestion.component';
import { EditquestionComponent } from './question/editquestion/editquestion.component';
import { UsersComponent } from './pages/users/users.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { TestComponent } from './test/test.component';
import { MyanswersComponent } from './user/myanswers/myanswers.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CookieService } from 'ngx-cookie-service';
import { BookmarkComponent } from './user/bookmark/bookmark.component';
import { SingleuserComponent } from './pages/singleuser/singleuser.component';
import { TagsComponent } from './pages/tags/tags.component';
import { SingletagComponent } from './pages/singletag/singletag.component';
import { ForgetpasswordComponent } from './user/forgetpassword/forgetpassword.component';
import { VerificationsComponent } from './pages/verifications/verifications.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    UserprofileComponent,
    AllmyquestionsComponent,
    AddquestionComponent,
    ErrorpageComponent,
    SinglequestionComponent,
    EditquestionComponent,
    UsersComponent,
    SearchpageComponent,
    TestComponent,
    MyanswersComponent,
    BookmarkComponent,
    SingleuserComponent,
    TagsComponent,
    SingletagComponent,
    ForgetpasswordComponent,
    VerificationsComponent,
    ResetpasswordComponent,



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
    MatChipsModule,
    NgSelectModule,
    MatCardModule,
    MatMenuModule,
    LazyLoadImageModule,
    NgxPaginationModule,
    MatDialogModule,
    MatTabsModule,MatAutocompleteModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatStepperModule,
    MatInputModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi:true
    },
    CookieService
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;
 }
