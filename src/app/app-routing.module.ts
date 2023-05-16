import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'users', children: [
      { path: '', component: UserComponent },
    ]
  },

  // Sign In / Sign Up
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

  // Redirection
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
