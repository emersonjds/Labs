import { Component } from '@angular/core';

@Component({
  selector: 'pm-root ',
  template: `

  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <a class="navbar-brand"> {{pageTitle}}</a>
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['/welcome']">Home</a></li>
          <li><a [routerLink]="['/products']">Product Lista</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <div class="container">
    <router-outlet></router-outlet>
  </div>


  `
})
export class AppComponent {
  pageTitle: string = 'Studies Again and Again';
}
