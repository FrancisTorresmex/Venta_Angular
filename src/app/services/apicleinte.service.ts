import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response } from '../models/response';
import { Cliente } from '../models/cliente';

const httpOption = {  //variable que se usara en el header de la petición (para no tener que repetirlo)
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApicleinteService {

  url: string = 'https://localhost:44368/api/Cliente';

  constructor(private _http: HttpClient) { }
  
  //Método para obtener datos de api (de tipo response que es mi modelo, y es un Observable, estos siempre que se usan en otros componentes llevan el .subscribe)
  getClientes() : Observable<Response> {
    return this._http.get<Response>(this.url);
  }

  //Método para insertar un nuevo cleinte
  addCliente(cliente: Cliente): Observable<Response> {
    return this._http.post<Response>(this.url, cliente, httpOption); //url, cuerpo, header
  }

  //Método para editar un cliente
  editCliente(cliente:Cliente): Observable<Response> {
    return this._http.put<Response>(this.url, cliente, httpOption);
  }

  //Método para eliminar un cliente (este solo necesita la id en el url)
  deleteCliente(id: number): Observable<Response> {
    return this._http.delete<Response>(`${this.url}?id=${id}`);
  }

}
