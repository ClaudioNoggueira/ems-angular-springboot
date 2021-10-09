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

  listarEmpregados(): Observable<Empregado[]> {
    return this.httpClient.get<Empregado[]>(`${this.baseUrl}`);
  }
}
