import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomepageComponent },
  { path: 'register',component:RegisterComponent},
  { path: 'login', component:LoginComponent },
  {path:'myprofile',component:UserprofileComponent},
  {path:'editprofile',component:EditprofileComponent},
  { path:"test", component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
