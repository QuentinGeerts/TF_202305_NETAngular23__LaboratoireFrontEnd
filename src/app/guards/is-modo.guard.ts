import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Roles } from '../enums/roles.enum';
import { SessionService } from '../services/session.service';

export const isModoGuard: CanActivateFn = (route, state) => {
  return inject(SessionService).user?.role === Roles.modo
    ? true
    : inject(Router).createUrlTree(['notauthorize']);
};
