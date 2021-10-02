import { Component } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormBuilder, Validators } from '@angular/forms';
import { ApiventaService } from '../../services/apiventa.service';
import { Venta } from "src/app/models/venta";
import { Concepto } from '../../models/concepto';


@Component({
    templateUrl: 'dialogVenta.component.html'
})
export class DialogVentaComponet {

    public venta: Venta; //objeto de tipo de mi modelo Venta
    public conceptos: Concepto[]; //objeto lista de tipo de mi modelo Concepto

    public conceptoForm = this.formBuilder.group({ //variables que se usan en el formulario html
        idProducto: [1, Validators.required],
        cantidad: [0, Validators.required],  
        importe: [0, Validators.required], //requerido y valor default        
              
    });

    constructor( 
        public dialogRef: MatDialogRef<DialogVentaComponet>, //el dialogRef es para las referencias, lo pongo de tipo de este mismo, para que se pueda cerrar o abrir a si mismo
        public snackbar: MatSnackBar, 
        public formBuilder: FormBuilder,
        public apiVenta: ApiventaService
        ) {        
        this.venta = {idCliente: 5, conceptos: []};
        this.conceptos = []; //inicalizamos 
    }

    //Agregar concepto abriendo el dialog venta
    addConcepto() {
        this.conceptos.push(this.conceptoForm.value); //le agregamos a la lista de conceptos lo que recibamos de los campos del form
    }

    //Agregar venta abriendo el dialog venta
    addVenta() {
        this.venta.conceptos = this.conceptos; //los coneceptos de venta seran los mismos que los de conceptos
        this.apiVenta.add(this.venta).subscribe(resp => {
            if(resp.exito === 1) {
                this.dialogRef.close();
                this.snackbar.open("Venta insertada con éxito", '', {
                    duration: 2000
                });                
            }
        });
        console.log(this.venta);
    }
    
    
    //Cerrar el dialog
    close() {
        this.dialogRef.close();
    }

}