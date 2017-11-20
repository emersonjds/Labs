import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  public languages: Array<string> = ['portuguese', 'english', 'spanish'];

  model = new Employee('Emerson', 'Silva');

  constructor() {}

  ngOnInit() {}

  nameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }
}
