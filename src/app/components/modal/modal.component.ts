import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {

  @Input() superHero: string = '';
  
  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  onSubmit(value: boolean) {
    this.dialogRef.close(value);
  }
}
