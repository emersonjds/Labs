import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.scss']
})
export class NgSwitchCaseComponent implements OnInit {

  aba: string = 'home'

  constructor() { }

  ngOnInit() {
  }

}
