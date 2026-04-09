import { HttpClient } from '@angular/common/http';
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
}
