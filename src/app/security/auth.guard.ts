import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

//Creado para evitar que puedan acceder a componentes no permitidos sin iniciar sesión

@Injectable({ providedIn:'root' }) //root para que podamos inyectarlo desde raiz
export class AuthGuard implements CanActivate { //implemtenta de CanActive el cual es de sistema de angular    

    constructor( private router: Router ) { //el constructor aqui lleva router para poder navegar entre las paginas

    }
    
    canActivate(route: ActivatedRouteSnapshot) { //metodo obligatorio de CanActive
        this.router.navigate(['/login']);
        return false;
    }

}