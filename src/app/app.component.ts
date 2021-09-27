import { Component } from '@angular/core';
import { Usuario } from './models/usuario';
import { ApiauthService } from './services/apiauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  usuario!: Usuario; //variable de tipo usuario

  constructor(public apiauthservice: ApiauthService, private router: Router) {
    this.apiauthservice.usuario.subscribe(resp => { //llamo a mi propiedad usuario de apiAuthservice y me siscribo, ya que es observable y al llmarse aqui se debe suscribir
      this.usuario = resp; //le asigno a mi varibale usario de tipo Usuario, la resp que tambien es de tipo Usuario
      console.log('Cambio de objeto: ' + resp);
    });
  }
  
  //Método que llama a mi metodo de cerrar sesión de apiauthService
  logout() {
    this.apiauthservice.logout();
    this.router.navigate(['/login']);
  }

}
