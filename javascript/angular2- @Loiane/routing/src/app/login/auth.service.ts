import { Router } from '@angular/router';

import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome == 'usuario@email.com' && usuario.senha == '1234') {
      this.usuarioAutenticado = true

      this.mostrarMenuEmmiter.emit(true)

      this.router.navigate(['/'])

    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmmiter.emit(false)
    }
  }
}
