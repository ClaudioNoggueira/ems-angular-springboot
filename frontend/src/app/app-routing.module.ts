import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarEmpregadoComponent } from './adicionar-empregado/adicionar-empregado.component';
import { AtualizarEmpregadoComponent } from './atualizar-empregado/atualizar-empregado.component';

import { ListaEmpregadosComponent } from './lista-empregados/lista-empregados.component';

const routes: Routes = [
  { path: 'empregados', component: ListaEmpregadosComponent },
  { path: 'adicionar-empregado', component: AdicionarEmpregadoComponent },
  { path: 'atualizar-empregado/:id', component: AtualizarEmpregadoComponent },
  { path: '', redirectTo: 'empregados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
