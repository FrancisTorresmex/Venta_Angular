import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './login/login.component';
import { VentaComponent } from './venta/venta.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', canActivate: [AuthGuard] }, //el CanActive le asigne mi guard creado, osea esas rutas son accessibles siempre y cuando cumplan con el guard
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard] },
  {path: 'ventas', component: VentaComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent} // este no lleva el CanActive porque ha este si pueden acceder   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
