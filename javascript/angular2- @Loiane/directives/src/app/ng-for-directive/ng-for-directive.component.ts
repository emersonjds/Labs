import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.scss']
})
export class NgForDirectiveComponent implements OnInit {

  cursos : string [] = ['Angular 2', 'Java', 'Phonegap']

  constructor() { }

  ngOnInit() {

    this.cursos.forEach(element => {
      console.log(element)
    });
  }

}
