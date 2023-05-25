import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditComponent } from './components/users/edit/edit.component';
import { UsersComponent } from './components/users/users.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotAuthorizedComponent } from './shared/components/not-authorized/not-authorized.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { RolePipe } from './shared/pipes/role.pipe';
import { CustomInputComponent } from './shared/components/custom-input/custom-input.component';
import { SafeHTMLPipe } from './shared/pipes/safe-html.pipe';
import { CustomSelectComponent } from './shared/components/custom-select/custom-select.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { BackDirective } from './shared/directives/back.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    UsersComponent,
    RolePipe,
    EditComponent,
    CustomInputComponent,
    SafeHTMLPipe,
    CustomSelectComponent,
    AlertComponent,
    BackDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
