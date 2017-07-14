import { AuthService } from './../login/auth.service';

import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _autService: AuthService,
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this._autService.usuarioEstaAutenticado()) {
      return true; //se autenticado recebe ok do guard
    }

    this._router.navigate(['/login']);

    return false;
  }

}
