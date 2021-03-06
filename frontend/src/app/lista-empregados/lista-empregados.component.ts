import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empregado } from '../empregado';
import { EmpregadoService } from '../empregado.service';

@Component({
  selector: 'app-lista-empregados',
  templateUrl: './lista-empregados.component.html',
  styleUrls: ['./lista-empregados.component.css']
})
export class ListaEmpregadosComponent implements OnInit {

  empregados!: Empregado[];

  constructor(private service: EmpregadoService, private router: Router) { }

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

  // get all employees
  private listarEmpregados() {
    this.service.listarEmpregados().subscribe(data => {
      this.empregados = data;
    });
  }

  // update employee
  atualizarEmpregado(id: number) {
    this.router.navigate(['atualizar-empregado', id])
  }

  // delete employee
  excluirEmpregado(id: number) {
    this.service.excluirEmpregado(id).subscribe(data => {
      this.listarEmpregados();
    },
      error => console.log(error)
    );
  }

  // employee details
  detalhesEmpregado(id: number) {
    this.router.navigate(['detalhes-empregado', id]);
  }

}
