import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() typeInput: string = '';
  @Input() idInput: string = '';
  @Input() formGroupInput!: FormGroup;
  @Input() formControlNameInput: string = '';
  @Input() placeholderInput: string = '';
  @Input() labelInput: string = '';
  @Input() fontAwesomeIcon: string = '';
  @Input() disabledInput: boolean = false;

  constructor () { }

  ngOnInit (): void { }

}
