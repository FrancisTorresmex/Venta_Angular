import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav'; //para usar material (el nav)
import { MatTableModule } from '@angular/material/table'; //para usar material (tablas)
import { MatDialogModule } from '@angular/material/dialog'; //para usar material (modeales o dialog)
import { MatButtonModule } from '@angular/material/button'; //para usar material (botones)
import { MatInputModule } from '@angular/material/input'; // para usar material (cajas de texto)
import { MatSnackBarModule } from '@angular/material/snack-bar'; // para usar material (snack o mensajes que aparecen al hacer algo)
import { MatCardModule } from '@angular/material/card'; //paea usar material (cartas o tarjetas)




import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //para peticiones http
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para formularios (uno es de tipo reactivo)


 
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { VentaComponent } from './venta/venta.component';
import { DialogClienteComponent } from './cliente/dialog/dialogCliente.component';
import { DialogDeleteComponent } from './common/delete/dialogDelete.component';
import { DialogVentaComponet } from './venta/dialog/dialogVenta.component';
import { JwtInterceptor } from './security/jwt.interceptor';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    LoginComponent,    
    DialogClienteComponent,
    DialogDeleteComponent,
    DialogVentaComponet,
    VentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,    
    MatSnackBarModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true} //le agreglo la constante llamada Http_interseptor(es de sistema), que use mi clase creada llamada JwtInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
