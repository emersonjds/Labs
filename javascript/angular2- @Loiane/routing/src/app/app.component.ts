import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mostraMenu: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.mostrarMenuEmmiter.subscribe(
      mostrar => this.mostraMenu = mostrar
    )
  }
}
