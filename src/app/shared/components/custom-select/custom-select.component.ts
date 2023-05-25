import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Roles } from 'src/app/enums/roles.enum';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {

  @Input() idSelect: string = '';
  @Input() formGroupSelect!: FormGroup;
  @Input() formControlNameSelect: string = '';
  @Input() labelSelect: string = '';
  @Input() fontAwesomeIcon: string = '';
  @Input() disabledSelect: boolean = false;

  get roles (): { id: string, role: string | Roles; }[] {

    let r: { id: string, role: string | Roles; }[] = [];

    for (let i = 0; i < Object.keys(Roles).length / 2; i++) {
      const id = Object.keys(Roles)[i];
      const role = Object.values(Roles)[i];

      r.push({ id, role });
    }

    return r;
  }

}
