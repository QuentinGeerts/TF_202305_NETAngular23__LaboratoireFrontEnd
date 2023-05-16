import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Jwt } from '../models/jwt.model';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor () { }

  decodeToken (token: string): Jwt {
    return jwtDecode(token);
  }
}
