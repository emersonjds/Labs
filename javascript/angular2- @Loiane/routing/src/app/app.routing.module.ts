import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent }
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // rota para raiz da aplicação

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
