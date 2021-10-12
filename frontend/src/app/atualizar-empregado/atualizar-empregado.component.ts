import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empregado } from '../empregado';
import { EmpregadoService } from '../empregado.service';

@Component({
  selector: 'app-atualizar-empregado',
  templateUrl: './atualizar-empregado.component.html',
  styleUrls: ['./atualizar-empregado.component.css']
})
export class AtualizarEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado();
  id!: number;

  constructor(private service: EmpregadoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.pesquisarEmpregadoPorId(this.id).subscribe(data => {
      this.empregado = data;
    },
      error => console.log(error)
    );
  }

  // submit
  enviar() {
    this.service.atualizarEmpregado(this.id, this.empregado).subscribe(data => {
      this.irParaListaDeEmpregados();
    },
      error => console.log(error)

    );
  }

  // go to employees list
  irParaListaDeEmpregados() {
    this.router.navigate(['/empregados']);
  }

}
