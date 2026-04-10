import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService extends AbstractService {

  constructor() {
    super(environment.apiMedicos + "/medicos");
  }

  public salvar(medico: any): Observable<any> {
    return this.http.post<any>(this.url, medico);
  }

  public listar(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  public filtrar(filtro: any): Observable<any[]> {
    let params = new HttpParams();
    if (filtro.nome) {
      params = params.set("nome", filtro.nome);
    }
    if (filtro.cpf) {
      params = params.set("cpf", filtro.cpf);
    }
    return this.http.get<any[]>(this.url + "/filter", { params });
  }
}
