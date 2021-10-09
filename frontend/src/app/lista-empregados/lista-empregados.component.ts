import { Component, OnInit } from '@angular/core';
import { Empregado } from '../empregado';
import { EmpregadoService } from '../empregado.service';

@Component({
  selector: 'app-lista-empregados',
  templateUrl: './lista-empregados.component.html',
  styleUrls: ['./lista-empregados.component.css']
})
export class ListaEmpregadosComponent implements OnInit {

  empregados!: Empregado[];

  constructor(private service: EmpregadoService) { }

  ngOnInit(): void {
    // this.empregados = [{
    //   "id": 1,
    //   "nome": "Claudio",
    //   "sobrenome": "Nogueira",
    //   "email": "cllaudionoggueira@gmail.com"
    // },
    // {
    //   "id": 2,
    //   "nome": "Maria",
    //   "sobrenome": "Silva",
    //   "email": "mariasilva@gmail.com"
    // }, {
    //   "id": 3,
    //   "nome": "Ana",
    //   "sobrenome": "Santos",
    //   "email": "anasantos@gmail.com"
    // },
    // {
    //   "id": 4,
    //   "nome": "José",
    //   "sobrenome": "Carvalho",
    //   "email": "josecarvalho@gmail.com"
    // }];

    this.listarEmpregados();
  }

  private listarEmpregados() {
    this.service.listarEmpregados().subscribe(data => {
      this.empregados = data;
    })
  }
}