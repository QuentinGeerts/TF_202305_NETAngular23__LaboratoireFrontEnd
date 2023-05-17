import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'https://localhost:7060/api/user/';

  constructor (private _httpClient: HttpClient) { }

  signin (login: Login): Observable<string> {
    return this._httpClient.post(this.api + 'login/', login, { 'responseType': 'text' });
  }

  register (register: Register): Observable<User> {
    return this._httpClient.post<User>(this.api + 'register', register);
  }

  getById (id: number): Observable<User> {
    return this._httpClient.get<User>(this.api + id);
  }

  get (): Observable<User[]> {
    return this._httpClient.get<User[]>(this.api);
  }

  delete (id: number): Observable<void> {
    return this._httpClient.delete<void>(this.api + id);
  }
}
