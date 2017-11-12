import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  users: any[];
  // tslint:disable-next-line:no-inferrable-types
  hasPermission: boolean = false;

  constructor() { }
  ngOnInit() {
    if (this.hasPermission) {
      this.getUsers()
        .then(users => this.users = users)
        .catch(e => console.log(e.message));
    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      { name: 'jhon', email: 'john@angular.com' },
      { name: 'coolean', email: 'coolean@angular.com' }
    ];
  }


}
