import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: 'home', component:HomepageComponent },
  { path: 'register',component:RegisterComponent},
  { path: 'login', component:LoginComponent },
  { path:"test", component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
