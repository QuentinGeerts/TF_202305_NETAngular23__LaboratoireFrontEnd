import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form!: FormGroup;
  message: string | null = null;

  constructor (
    private _fb: FormBuilder,
    private _userService: UserService,
    private _sessionService: SessionService,
    private _router: Router
  ) { }

  ngOnInit (): void {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)], []],
      password: ['', [Validators.required], []]
    });
  }

  onSubmit (): void {
    if (this.form.invalid) return;

    this._userService.signin(this.form.value).subscribe({
      next: (token: string) => {
        this._sessionService.begin(token);
        this._router.navigateByUrl('/');
      },
      error: (err) => {
        this.message = "Nom d'utilisateur ou mot de passe incorrect.";
      }
    });

  }

}
