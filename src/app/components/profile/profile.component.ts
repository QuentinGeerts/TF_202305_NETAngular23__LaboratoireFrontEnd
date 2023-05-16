import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/enums/role.enum';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: User;

  get role (): string {
    if (this.user.role === Role.admin) return "admin";
    if (this.user.role === Role.modo) return "modo";
    return "user";
  }

  constructor (private _route: ActivatedRoute) { }

  ngOnInit (): void {
    this.user = this._route.snapshot.data['user'];
  }

}
