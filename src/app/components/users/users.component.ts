import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users!: User[];
  user!: User;

  constructor (private _userService: UserService, private _sessionSerivce: SessionService) { }

  ngOnInit (): void {
    this._userService
      .get()
      .subscribe((data: User[]) => this.users = data);

    this._sessionSerivce.onUser$.subscribe({
      next: (user: User | null) => {
        if (user) this.user = user;
      }
    });
  }



}
