import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Roles } from 'src/app/enums/roles.enum';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: User;

  get role (): string {
    if (this.user.role === Roles.admin) return "admin";
    if (this.user.role === Roles.modo) return "modo";
    return "user";
  }

  constructor (private _route: ActivatedRoute) { }

  ngOnInit (): void {
    this.user = this._route.snapshot.data['user'];
  }

}
