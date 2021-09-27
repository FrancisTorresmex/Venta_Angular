import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { ApiauthService } from '../services/apiauth.service';

//Creado para evitar que puedan acceder a componentes no permitidos sin iniciar sesión

@Injectable({ providedIn:'root' }) //root para que podamos inyectarlo desde raiz
export class AuthGuard implements CanActivate { //implemtenta de CanActive el cual es de sistema de angular    

    constructor( private router: Router, private apiauthservice: ApiauthService ) { //el constructor aqui lleva router para poder navegar entre las paginas

    }
    
    canActivate(route: ActivatedRouteSnapshot) { //metodo obligatorio de CanActive
        const usuario = this.apiauthservice.usuarioData;

        if (usuario) { //si usario no es null, significa que una sesión existe por lo cual las rutas que reciban este canActivated tendran permiso de acceder (por ejemlo navegar directamente a home sin el login)
            return true;
        }
        this.router.navigate(['/login']); //si es null lo mandamos directo al login y el CanActivated de las rutas evitara acceder a otras rutas hasta logearse
        return false;
    }

}