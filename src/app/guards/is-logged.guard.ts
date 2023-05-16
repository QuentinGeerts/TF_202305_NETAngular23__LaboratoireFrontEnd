import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  return inject(SessionService).user != null
    ? true
    : inject(Router).createUrlTree(['notauthorize']);
};
