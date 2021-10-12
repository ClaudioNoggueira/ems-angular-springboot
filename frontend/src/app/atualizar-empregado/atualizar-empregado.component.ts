import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private service: EmpregadoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.pesquisarEmpregadoPorId(this.id).subscribe(data => {
      this.empregado = data;
    },
      error => console.log(error)
    );
  }

}
