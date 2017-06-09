import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeDoPortal: string 
  cursos :string [] = ['Java', 'Javascript', 'NodeJS'] 

  constructor() {
    this.nomeDoPortal = 'https://impacta.com.br'
   }

  ngOnInit() {
  }

}
