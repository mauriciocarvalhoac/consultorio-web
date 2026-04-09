import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {
  protected http = inject(HttpClient);
  protected url: string;

  constructor(uri: string) {
    this.url = uri;
  }

}
