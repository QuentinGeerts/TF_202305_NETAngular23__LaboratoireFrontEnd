import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from 'src/app/enums/roles.enum';
import { User } from 'src/app/models/user.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;
  user!: User | null;

  constructor (private _sessionService: SessionService, private _router: Router) { }

  ngOnInit (): void {
    this._sessionService.onUser$.subscribe({
      next: (user: User | null) => {
        this.isLogged = user != null;
        this.user = user;
      }
    });
  }

  hasAccess (): boolean {
    return this.user?.role === Roles.admin || this.user?.role == Roles.modo;
  }

  logout (): void {
    this._sessionService.close();
    this._router.navigateByUrl('/signin');
  }

}
