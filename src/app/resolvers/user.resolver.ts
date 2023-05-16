import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { User } from '../models/user.model';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

export const userResolver: ResolveFn<User | null> = (route, state) => {

  if (route.params['id']) {
    let id = +route.params['id'];
    return id ? inject(UserService).getById(id) : null;
  }

  return inject(UserService).getById(inject(SessionService).user!.id) || null;

};
