import { FormService } from '../../services/form-post.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  public languages: Array<string> = ['portuguese', 'english', 'spanish'];

  model = new Employee('', '', true, '', 'default');

  public hasPrimaryLanguageError = false;

  constructor(
    private formService: FormService,
    private http: Http) { }

  ngOnInit() { }

  nameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  validatePrimaryLanguage(value) {
    if (this.model.primaryLanguage === 'default') {
      this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;
    }
  }


  submitForm(form: NgForm) {
    this.formService.sendForm(this.model);
    this.validatePrimaryLanguage(this.model.primaryLanguage);

    // tslint:disable-next-line:one-line
    if(this.hasPrimaryLanguageError) {
      return;
    }
    // this.model == estrutura passada por form
  }
}
