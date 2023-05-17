import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users!: User[];

  constructor (private _userService: UserService) { }

  ngOnInit (): void {
    this._userService
      .get()
      .subscribe((data: User[]) => this.users = data);
  }



}
