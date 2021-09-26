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




import { HttpClientModule } from '@angular/common/http'; //para peticiones http
import { FormsModule } from '@angular/forms'; //para formularios


 
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { DialogClienteComponent } from './cliente/dialog/dialogCliente.component';
import { DialogDeleteComponent } from './common/delete/dialogDelete.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    LoginComponent,    
    DialogClienteComponent,
    DialogDeleteComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
