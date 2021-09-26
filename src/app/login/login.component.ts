import { Component, OnInit } from "@angular/core";
import { ApiauthService } from '../services/apiauth.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

    public email: string = '';
    public password: string = '';
    
    constructor(public apiauth: ApiauthService) {
        
    }

    ngOnInit() {

    }

    //Método del login
    login() {
        this.apiauth.login(this.email, this.password).subscribe(resp => { //llamo a mi metodo de servicies llamado login
            console.log(resp);
        });
    }

}