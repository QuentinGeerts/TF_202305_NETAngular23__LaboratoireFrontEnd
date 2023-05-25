import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TF_202305_NETAngular23__LaboratoireFrontEnd';

  constructor (private _sessionService: SessionService, private _router: Router) { }

  ngOnInit (): void {
    if (this._sessionService.user && !this._sessionService.checkValidityTokenExp()) {
      this._sessionService.close();
      this._router.navigateByUrl('signin');
    };
  }
}
