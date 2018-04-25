import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: null,
      email: null
    });
  }
}
