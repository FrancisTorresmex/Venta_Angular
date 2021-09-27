import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiauthService } from '../services/apiauth.service';

//clase creada porque en angular existe algo llamado interceptor que se pueden encargar de agregarles cosas
//a las peticiones como el token que viene de la api, en lugar de poner uno a uno en los headers de cada petición

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private apiauthservice: ApiauthService) {}
    
    //Método obligatorio ya que implementa a HttpInterceptor
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const usuario = this.apiauthservice.usuarioData; //el metodo usuarioData regresa null o el valor según exista sesión o no
        if (usuario) { //si usuario no es null, singnifica que existe sesión
            request = request.clone({ //clonamos todo lo que ya tenga esa request (exito, mensaje, data)
                setHeaders: {
                    Authorization: `Bearer ${usuario.token}` //le agrego a la clonacion el header de token 
                }
            })
        }
        return next.handle(request); //siempre y cuando haya sesión osea pase por el if, se clonara y añadira el token al header
    }
    
}