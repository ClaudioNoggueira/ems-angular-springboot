import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empregado } from '../empregado';
import { EmpregadoService } from '../empregado.service';

@Component({
  selector: 'app-detalhes-empregado',
  templateUrl: './detalhes-empregado.component.html',
  styleUrls: ['./detalhes-empregado.component.css']
})
export class DetalhesEmpregadoComponent implements OnInit {

  entity!: Empregado;
  id!: number;

  constructor(private route: ActivatedRoute, private service: EmpregadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.pesquisarEmpregadoPorId(this.id).subscribe(data => {
      this.entity = data;
    });
  }
}
