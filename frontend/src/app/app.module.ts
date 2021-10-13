import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpregadosComponent } from './lista-empregados/lista-empregados.component';
import { AdicionarEmpregadoComponent } from './adicionar-empregado/adicionar-empregado.component';
import { FormsModule } from '@angular/forms';
import { AtualizarEmpregadoComponent } from './atualizar-empregado/atualizar-empregado.component';
import { DetalhesEmpregadoComponent } from './detalhes-empregado/detalhes-empregado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpregadosComponent,
    AdicionarEmpregadoComponent,
    AtualizarEmpregadoComponent,
    DetalhesEmpregadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
