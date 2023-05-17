import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor (private _sessionService: SessionService) { }

  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this._sessionService.token) {
      let clone = request.clone({ setHeaders: { 'Authorization': 'Bearer ' + this._sessionService.token } });
      return next.handle(clone);
    }

    return next.handle(request);
  }
}
