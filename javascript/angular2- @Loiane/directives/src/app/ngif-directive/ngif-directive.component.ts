import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.scss']
})
export class NgifDirectiveComponent implements OnInit {

  cursos: string [] = ['Java', 'Angular', 'Python']

  mostrarCursos: boolean = false

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos
  }

}
