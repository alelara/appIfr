import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OficinaRegistral } from '../model/Oficina.model';
import { Respuesta } from '../model/Respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(public httpClient: HttpClient) { }

  public getOficinas() {
    return this.httpClient.get<OficinaRegistral>('http://10.8.6.28:8080/getOficinas');
  }

  public desbloqueaArea(area: string) {
    console.log('http://10.8.6.28:8080/desbloqueoArea?area=' + area);
    return this.httpClient.get<Respuesta>('http://10.8.6.28:8080/desbloqueoArea?area=' + area);
  }

}
