import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogVentaComponet } from './dialog/dialogVenta.component';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  readonly width: string = '600px'; //para tener la medida del dialog mas accesible

  constructor( public dialog: MatDialog, public snackbar: MatSnackBar ) { }

  ngOnInit(): void {
  }
  
  //Método para abrir el dialog de crear venta
  openAdd() {
    const dialogRef = this.dialog.open(DialogVentaComponet, {
      width: this.width,
    });
     
  }

}
