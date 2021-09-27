import { Component, OnInit } from "@angular/core";
import { ApiauthService } from '../services/apiauth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; //formulario reactivo


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

    // public email: string = '';
    // public password: string = '';
    
    //aqui usamos el formControl se puede hacer asi, pero es repetir mucho new FormControl, asi que mejor uso FromBuilder
    // public loginForm = new FormGroup({ 
    //     email: new FormControl(''),
    //     password: new FormControl(''),
    // });
    
    //se usa mejor la forma con formBuilder para ahorrar código
    public loginForm = this.formBuilder.group({
        email: ['', Validators.required], //que sea requerido
        password: ['', Validators.required]
    });

    constructor(public apiauthService: ApiauthService, private router: Router, private formBuilder: FormBuilder) {
        // if(apiauthService.usuarioData) { //usuario data retorna null o la data de la sesión, si no regresa null es porque existe sesión
        //     this.router.navigate(['/']); //si el usuario tiene sesión e intenta ir por dirección al login, como ya existe sesión le decimos que ya tiene sesión y lo mandamos a home
        // }        
    }

    ngOnInit() {}

    //Método del login
    login() {
        console.log(this.loginForm.value);
        //entre parametros necesita algo de tipo modelo Form, el loginForm creado cumple los requisitos por eso se puede poner y el .value es para obtener el email y password
        this.apiauthService.login(this.loginForm.value).subscribe(resp => { //llamo a mi metodo de servicies llamado login
            if (resp.exito === 1) { //si el login es correcto, lo mandamos a la ruta home, recuerda que tiene CanActive el cual para acceder necesita cumplir con el authguard
                this.router.navigate(['/']);
            }
        });
    }

}