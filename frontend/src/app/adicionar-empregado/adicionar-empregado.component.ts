import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empregado } from '../empregado';
import { EmpregadoService } from '../empregado.service';

@Component({
  selector: 'app-adicionar-empregado',
  templateUrl: './adicionar-empregado.component.html',
  styleUrls: ['./adicionar-empregado.component.css']
})
export class AdicionarEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado();

  constructor(private service: EmpregadoService, private router: Router) { }

  ngOnInit(): void {
  }

  //saveEmployee
  salvarEmpregado() {
    this.service.adicionarEmpregado(this.empregado).subscribe(data => {
      console.log(data);
      this.irParaListaDeEmpregados();
    },
      error => console.log(error));
  }

  //goToEmployeesList
  irParaListaDeEmpregados() {
    this.router.navigate(['/empregados']);
  }

  //onSubmit
  enviar() {
    console.log(this.empregado);
    this.salvarEmpregado();
  }
}
