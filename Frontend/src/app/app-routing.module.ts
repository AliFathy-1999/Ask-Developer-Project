import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { SingletagComponent } from './pages/singletag/singletag.component';
import { SingleuserComponent } from './pages/singleuser/singleuser.component';
import { TagsComponent } from './pages/tags/tags.component';
import { UsersComponent } from './pages/users/users.component';
import { VerificationsComponent } from './pages/verifications/verifications.component';
import { AddquestionComponent } from './question/addquestion/addquestion.component';
import { AllmyquestionsComponent } from './question/allmyquestions/allmyquestions.component';
import { EditquestionComponent } from './question/editquestion/editquestion.component';
import { SinglequestionComponent } from './question/singlequestion/singlequestion.component';
import { TestComponent } from './test/test.component';
import { BookmarkComponent } from './user/bookmark/bookmark.component';
import { ForgetpasswordComponent } from './user/forgetpassword/forgetpassword.component';

import { HomepageComponent } from './user/homepage/homepage.component';
import { LoginComponent } from './user/login/login.component';
import { MyanswersComponent } from './user/myanswers/myanswers.component';
import { RegisterComponent } from './user/register/register.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',children:[
    {path: '', component:HomepageComponent},
    { path: 'singlequestion/:id', component: SinglequestionComponent },
  ] },
  {path:'search',component:SearchpageComponent},
  { path: 'search',children:[
    {path: '', component:SearchpageComponent},
    { path: 'singlequestion/:id', component: SinglequestionComponent },
  ] },
  { path: 'register',component:RegisterComponent},
  { path: 'login', component:LoginComponent },
  { path: '',children:[
    { path: '', component: AllmyquestionsComponent },
    { path: 'forgetpassword', component: ForgetpasswordComponent },
  ]
  },
  { path: 'verifying',children:[
    { path: '', component: VerificationsComponent },
    { path: 'resetpassword', component: ResetpasswordComponent },
  ]
  },
  {path:'myprofile',component:UserprofileComponent},
  { path: 'addquestion', component: AddquestionComponent },
  { path: 'myquestions',children:[
    { path: '', component: AllmyquestionsComponent },
    { path: 'editquestion/:id', component: EditquestionComponent },
    { path: 'singlequestion/:id', component: SinglequestionComponent },
    { path: 'singlequestion/:id/editquestion/:id', component: EditquestionComponent }
  ]
  },
  { path: 'myanswers',children:[
    { path: '', component: MyanswersComponent },
    { path: 'singlequestion/:id', component: SinglequestionComponent },
  ]
  },
  { path: 'editquestion/:id', component: EditquestionComponent },
  { path: 'singlequestion/:id', component: SinglequestionComponent },
  { path: 'users', component: UsersComponent },
  {path: 'user/:id', component: SingleuserComponent },
  { path: 'BookmarkQuestion',children:[
    { path: '', component: BookmarkComponent },
  ]
  },
  { path: 'tags',children:[
    { path: '', component: TagsComponent },
    { path: 'tagged/:tag', component: SingletagComponent },
  ]
  },
  { path: 'test', component: TestComponent },
  { path: '**', component: ErrorpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
