import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"; //para el matdialog y el otro es para la data que trae de otros componentes
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApicleinteService } from '../../services/apicleinte.service';
import { Cliente } from '../../models/cliente';



@Component({
    templateUrl: 'dialogCliente.component.html'
})

export class DialogClienteComponent {

    public nombreForm: string = ''; //para los input de los form, lo que escriba gracia sal ngmodel se colocara aqui
            
    constructor(
                public dialogRef: MatDialogRef<DialogClienteComponent>, //en el constructor se encuentra mi objeto de MatDialogRef el cual es del tipo de esta misma clase para que se pueda cerrar el mismo, o asi                
                public apiCliente: ApicleinteService, //ademas de que el constructor tambien tiene referencia a mi apiClienteService porque la uso para enviar peticiones aqui
                public snackBar: MatSnackBar, //para mostrar un mensaje
                @Inject(MAT_DIALOG_DATA) public cliente:  Cliente //lo que recibe el dialog de otros componentes
                ) {
                    if (this.cliente != null) { //si el nombre no es null o vacio significa que se editara y se pone en el form el nombre precargado
                        this.nombreForm = cliente.nombre;
                    }
                }

    
    //Metodo para cerrar el dialog
    close() {
        this.dialogRef.close();
    }

    
    //Metodo para llamar a mi servicio y hacer la peticion de agregar cliente
    addCliente() {
        const cliente: Cliente = {nombre: this.nombreForm, id: 0}; //se pondra lo que escriba en el form, la id es defualt, la bd se encarga de incrementarla

        this.apiCliente.addCliente(cliente).subscribe(resp => {
            if(resp.exito === 1) { //si recibe 1 es porque todo salio bien (asi lo hize en la api 1 = bien, 0 = error)
                this.dialogRef.close();

                this.snackBar.open('Cliente insertado con éxito', '', { //mensaje, acción en este caso vacia, duración
                    duration: 2000
                });
            }
        })
    }

    //Metodo para llamar a mi servicio y hacer la peticion de editar cliente
    editCliente() {

        const cliente: Cliente = {nombre: this.nombreForm, id: this.cliente.id}

        this.apiCliente.editCliente(cliente).subscribe(resp => {
            if (resp.exito === 1) {
                this.dialogRef.close();

                this.snackBar.open('Cliente editado con exito', '', {
                    duration: 2000
                });
            }
        });
    }
    
}