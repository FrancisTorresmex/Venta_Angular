import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Venta } from '../models/venta';


const httpOption = {  //variable que se usara en el header de la petición (para no tener que repetirlo)
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiventaService {

  url: string = 'https://localhost:44368/api/Venta'; //url de la api

  constructor( private _http: HttpClient ) { }

  //Método que se conecta con la api para agregar venta
  add(venta: Venta):Observable<Response> {
    return this._http.post<Response>(this.url, venta, httpOption) //url, body, headers
  }
}
