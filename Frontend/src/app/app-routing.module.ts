import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AddquestionComponent } from './question/addquestion/addquestion.component';
import { AllmyquestionsComponent } from './question/allmyquestions/allmyquestions.component';
import { EditquestionComponent } from './question/editquestion/editquestion.component';
import { SinglequestionComponent } from './question/singlequestion/singlequestion.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

import { HomepageComponent } from './user/homepage/homepage.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',children:[
    {path: '', component:HomepageComponent},
    { path: 'singlequestion/:id', component: SinglequestionComponent },
  ] },
  { path: 'register',component:RegisterComponent},
  { path: 'login', component:LoginComponent },
  {path:'myprofile',component:UserprofileComponent},
  { path:"test", component: TestComponent },
  { path:"test2", component: Test2Component },
  { path: 'addquestion', component: AddquestionComponent },
  { path: 'myquestions',children:[
    { path: '', component: AllmyquestionsComponent },
    { path: 'editquestion/:id', component: EditquestionComponent },
    { path: 'singlequestion/:id', component: SinglequestionComponent }
  ]
  },
  { path: 'singlequestion/:id', component: SinglequestionComponent },
  { path: '**', component: ErrorpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
