import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

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
  
}
