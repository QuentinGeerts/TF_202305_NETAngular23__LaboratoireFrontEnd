import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditComponent } from './components/users/edit/edit.component';
import { UsersComponent } from './components/users/users.component';
import { isAdminGuard } from './guards/is-admin.guard';
import { isLoggedGuard } from './guards/is-logged.guard';
import { isModoGuard } from './guards/is-modo.guard';
import { isNotLoggedGuard } from './guards/is-not-logged.guard';
import { userResolver } from './resolvers/user.resolver';
import { NotAuthorizedComponent } from './shared/components/not-authorized/not-authorized.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'users', children: [
      { path: '', component: UsersComponent, canActivate: [isLoggedGuard, isAdminGuard || isModoGuard] },
      {
        path: ':id', children: [
          { path: 'details/update', component: EditComponent, resolve: { user: userResolver }, canActivate: [isLoggedGuard, isAdminGuard] },
          { path: 'details', component: ProfileComponent, resolve: { user: userResolver }, canActivate: [isLoggedGuard, isAdminGuard || isModoGuard] },
        ]
      },
    ]
  },

  {
    path: 'profile', children: [
      { path: '', component: ProfileComponent, resolve: { user: userResolver }, canActivate: [isLoggedGuard] },
      { path: 'update', component: EditComponent, resolve: { user: userResolver } }
    ]
  },

  // Sign In / Sign Up
  { path: 'signin', component: SigninComponent, canActivate: [isNotLoggedGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [isNotLoggedGuard] },

  // Redirection
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'notauthorize', component: NotAuthorizedComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
