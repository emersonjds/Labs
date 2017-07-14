import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';


const cursosRoute: Routes = [
  { path: '', component: CursosComponent },
  { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent },
  { path: ':id', component: CursoDetalheComponent }
]

@NgModule({
  imports: [RouterModule.forChild(cursosRoute)], // por ser um modulo de funcionalidade utiliza-se o forChild
  exports: [RouterModule]
})
export class CursosRoutingModule { }
