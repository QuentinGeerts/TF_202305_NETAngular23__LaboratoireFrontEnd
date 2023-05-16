import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'https://localhost:7060/api/User/';

  constructor (private _httpClient: HttpClient) { }

  signin (login): Observable<string> {
    return this._httpClient.post<string>(this.api + 'login/',);
  }
}
