import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements OnInit {

  token!: string;

  get user (): User | null {
    let u = JSON.parse(localStorage.getItem('user') ?? '{}');
    return u.id ? u : null;
  }

  onUser$: BehaviorSubject<User | null>;

  constructor (
    private _userService: UserService,
    private _jwtService: JwtService
  ) {
    this.onUser$ = new BehaviorSubject<User | null>(this.user);
    this.onUser$.next(this.user);
    if (this.user && this.user.token) {
      this.token = this.user.token;
    }
  }

  ngOnInit (): void {

  }

  begin (token: string) {
    const decodedToken = this._jwtService.decodeToken(token);

    this.token = token;

    this._userService.getById(decodedToken.nameid).subscribe((user) => {
      user.token = token;
      localStorage.setItem('user', JSON.stringify(user));
      this.onUser$.next(user);
    });
  }

  close () {
    localStorage.clear();
    this.onUser$.next(null);
    this.token = '';
  }

  checkValidityTokenExp () {
    if (this.user && this.user.token) {
      return +(new Date().getTime() / 1000).toFixed(0) <= this._jwtService.decodeToken(this.user.token).exp;
    }

    return false;
  }
}
