import { Component, OnInit } from '@angular/core';
import { ApicleinteService } from '../services/apicleinte.service';

import { Response } from '../models/response';

import { DialogClienteComponent } from './dialog/dialogCliente.component'; //mi componente de dialog (creado para generar dialog)
import { MatDialog } from '@angular/material/dialog'; //material para crear dialog (de sistema, esas ventanitas que se sobreponen al presionar algo)
import { Cliente } from '../models/cliente';
import { DialogDeleteComponent } from '../common/delete/dialogDelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst!: any[];
  public columnas: string[] = ['Id', 'Nombre', 'Acciones']; //para decirle a material que columnas va a mostrar

  readonly width: string = '300px'; //para el tamaño del dialog (y no tener que estar cambiando cada tamaño en cada uno)

  constructor(private apiCliente: ApicleinteService, public dialog: MatDialog, public snakbar: MatSnackBar) {}

  ngOnInit(): void {
    this.getClientes();
  }
  
  //Metodo para traer datos del servicio
  getClientes() {
    this.apiCliente.getClientes().subscribe(resp => {  //llamo a mi servicio al metodo getClientes y como es observable lleva el .subscribe
      this.lst = resp.data;   //.data es el que contiene mis valores en la api     
    });
  }

  //Método para abrir el dialog añadir
  openAdd() {
    const dialogRef = this.dialog.open(DialogClienteComponent, { //con el open le decimos que queremos abrir el dialog, y ese dialog contendra lo de mi componente DialogClienteComponent
      width: this.width //tamaño de ventana
    });
    dialogRef.afterClosed().subscribe(result => { //una vez que se cierre el dialog, llamamos de nuevo el getClientes para actualizar la tabla si esque se añadio un cliente nuevo
        this.getClientes();
    });
  }

  //Método para abir el dialog editar
  openEdit(cliente: Cliente) {
    const dialogRef = this.dialog.open(DialogClienteComponent, {
      width: this.width,
      data: cliente //los datos que lleva el dialog      
    });
    dialogRef.afterClosed().subscribe(result => {
        this.getClientes();
    });
  }

  //Metodo para abrir el dialog eliminar(este elimina automaticamente)
  delete(cliente: Cliente) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, { //aqui no ocupamos data, porque el delte es desde la api con la id
      width: this.width,
    });
    dialogRef.afterClosed().subscribe(result => { //el result en este caso viene siendo los botones que mandan true o false desde el dialogDelte.component.html hasta aqui
      if (result) { //si el result es true
         this.apiCliente.deleteCliente(cliente.id).subscribe(resp => {
            if (resp.exito === 1) { //si el exito fue 1, osea se hizo la operación bien, recargamos la lista de cleintes para actualizar los eliminados
              this.snakbar.open('Cliente eliminado con éxito', '', {
                duration: 2000
              });
              this.getClientes();
            }
         }); 
      }else{
        this.snakbar.open('Error al eliminar el cliente', '', {
          duration: 2000
        });
      }
    });
  }

}
