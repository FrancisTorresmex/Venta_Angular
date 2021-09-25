import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    templateUrl: 'dialogDelete.component.html'
})

export class DialogDeleteComponent {

    constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>) { //el dialog hara referencia a esta misma clase por eso el <> para que ese dialog se controle desde este componente
        
    }

}

