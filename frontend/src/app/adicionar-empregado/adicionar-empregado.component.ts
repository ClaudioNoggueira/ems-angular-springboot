import { Component, OnInit } from '@angular/core';
import { Empregado } from '../empregado';

@Component({
  selector: 'app-adicionar-empregado',
  templateUrl: './adicionar-empregado.component.html',
  styleUrls: ['./adicionar-empregado.component.css']
})
export class AdicionarEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.empregado)
  }
}
