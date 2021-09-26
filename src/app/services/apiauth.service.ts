import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { Response } from '../models/response';
import { Usuario } from '../models/usuario';



const httpOption = {  //variable que se usara en el header de la petición (para no tener que repetirlo)
    headers: new HttpHeaders({
      'Contend-Type': 'application/json'
    })
  };

@Injectable({
    providedIn: 'root'
})
export class ApiauthService {

    url: string = 'https://localhost:44368/api/Usuario/login';

    private _usuarioSubject: BehaviorSubject<Usuario>; //Variable

    //como puse el usuarioSubject en privado, y no quiero que se pueda modificar su valor o tipo lo hago publico asi
    public get usuarioData(): Usuario {
      return this._usuarioSubject.value;
    }
    
    constructor( private _http: HttpClient ) {
      this._usuarioSubject = new BehaviorSubject<Usuario>(JSON.parse( localStorage.getItem('miUsuario')! ));    //el constructor por primera vez vera si hay algo guardado en local
    }

    //Método de login conexión con la api
    login(email: string, password: string): Observable<Response> {
        return this._http.post<Response>(this.url, {email, password}, httpOption).pipe( //(url, elementos a enviar(body), y headers) junto con un pipe
          map(resp => { //mapeamos 
            if (resp.exito === 1) { //si el resultado de la api es 1, osea ok
              const usuario: Usuario = resp.data; //le asignamos a la variable usuario la data (exito, errores, data)
              localStorage.setItem('miUsuario', JSON.stringify(usuario));  // guardar en localstorage un item que se llamara miUsuario, y los datos a guardar  
              this._usuarioSubject.next(usuario); //ya que es un observable, le decimos que esten suscritos a este observable esten al pendiente de un cambio, en este caso el cambio es el usuario
            }
            return resp;
          })
        ); 
    }

    //Método para cerrar sesión
    logout() {
      localStorage.removeItem("miUsuario"); //eliminamos del storage el item llamado miUsuario
      // this._usuarioSubject.next(); //al llamarlo como e sobservabe, los sucritos a este metodo veran que ya no esta logeado y se actualizara
    }
}