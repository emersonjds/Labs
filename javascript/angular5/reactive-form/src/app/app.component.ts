import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';

  formulario: FormGroup;
  // in the html FormGroup is a directive that links with the variable typed as FormGroup in TS file

  constructor(
    private fb: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: [null],
      email: [null]
    });
  }

  ngOnChanges() {
    this.showValues();
  }

  showValues() {
    console.log(this.formulario.value);
  }

  onSubmit() {
    this.saveDateForm();
  }


  saveDateForm() {
    localStorage.setItem("nome", this.formulario.controls.nome.value);
    localStorage.setItem("email", this.formulario.controls.email.value);
  }

  // #TODO: Implements a post method for an api

}
