import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Primeira pagina</h1>'

    <br/>

    <router-outlet></router-outlet>

  `
})
export class AppComponent {}