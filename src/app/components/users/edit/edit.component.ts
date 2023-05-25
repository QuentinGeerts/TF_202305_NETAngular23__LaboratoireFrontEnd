import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Roles } from 'src/app/enums/roles.enum';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user!: User;
  form!: FormGroup;

  isError: boolean = false;
  message: string = '';

  constructor (private _route: ActivatedRoute, private _userService: UserService, private _fb: FormBuilder) { }

  ngOnInit (): void {
    this.user = this._route.snapshot.data['user'];
    this.form = this._fb.group({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastname: ['', [Validators.maxLength(50)]],
      pseudo: ['', [Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', []],
      role: ['', []]
    });

    this.form.patchValue(this.user);
  }

  onSubmit (): void {
    if (this.form.invalid) return;

    let hasChangedFirstname = this.form.controls['firstname'].value !== this.user.firstname;
    let hasChangedLastname = this.form.controls['lastname'].value !== this.user.lastname;
    let hasChangedPseudo = this.form.controls['pseudo'].value !== this.user.pseudo;
    let hasChangedEmail = this.form.controls['email'].value !== this.user.email;
    let hasChangedPhoneNumber = this.form.controls['phoneNumber'].value !== this.user.phoneNumber;
    let hasChangedRole = this.form.controls['role'].value !== this.user.role;

    if (hasChangedFirstname || hasChangedLastname || hasChangedPseudo) {

      let firstname = hasChangedFirstname ? this.form.controls['firstname'].value : this.user.firstname;
      let lastname = hasChangedLastname ? this.form.controls['lastname'].value : this.user.lastname;
      let pseudo = hasChangedPseudo ? this.form.controls['pseudo'].value : this.user.pseudo;

      this._userService
        .patchData(this.user.id, { pseudo, firstname, lastname })
        .subscribe({
          next: () => {
            this.message = `Les données ont bien été modifiées.`;
            this.isError = false;
          },
          error: (err) => {
            this.message = `Erreur lors de la modification des données.`;
            this.isError = true;
          }
        });
    }


    if (hasChangedPhoneNumber) {
      this._userService
        .patchPhone(this.user.id, { phoneNumber: this.form.controls['phoneNumber'].value })
        .subscribe({
          next: () => {
            this.message = `Le numéro de téléphone a bien été modifié.`;
            this.isError = false;
          },
          error: (err) => {
            this.message = `Erreur lors de la modification du numéro de téléphone.`;
            this.isError = true;
          }
        });
    }

    if (hasChangedRole && this.user.role === Roles.admin) {

    }

  }

}
