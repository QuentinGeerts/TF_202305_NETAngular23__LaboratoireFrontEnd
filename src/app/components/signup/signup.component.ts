import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form!: FormGroup;
  isError: boolean = false;
  message: string = '';

  constructor (private _fb: FormBuilder, private _userService: UserService, private _router: Router) { }

  ngOnInit (): void {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]],
      pseudo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    });
  }

  onSubmit (): void {
    if (this.form.invalid) return;

    this._userService.register(this.form.value).subscribe({
      next: (user: User) => {
        this.message = 'Compte créé avec succès';
        this.isError = false;
      },
      error: (err: any) => {

        if (err.status == 400) {
          this.message = 'Adresse email déjà utilisée';
          this.isError = true;
        }

        if (err.error.errors['PasswordConfirmation']) {
          this.message = err.error.errors['PasswordConfirmation'][0];
          this.isError = true;
        }

      }
    });
  }

}
