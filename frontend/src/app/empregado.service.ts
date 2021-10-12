import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empregado } from './empregado';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  private baseUrl = "http://localhost:8080/empregados";

  constructor(private httpClient: HttpClient) { }

  // get all employees
  listarEmpregados(): Observable<Empregado[]> {
    return this.httpClient.get<Empregado[]>(`${this.baseUrl}`);
  }

  // add employee
  adicionarEmpregado(obj: Empregado): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, obj);
  }

  // find employee by id
  pesquisarEmpregadoPorId(id: number): Observable<Empregado> {
    return this.httpClient.get<Empregado>(`${this.baseUrl}/${id}`);
  }

  // update employee
  atualizarEmpregado(id: number, obj: Empregado): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, obj);
  }

}
