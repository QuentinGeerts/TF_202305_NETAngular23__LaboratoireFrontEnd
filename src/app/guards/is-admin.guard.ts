import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../enums/role.enum';
import { SessionService } from '../services/session.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  return inject(SessionService).user?.role === Role.admin
    ? true
    : inject(Router).createUrlTree(['notauthorize']);
};
