import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MainService } from 'src/app/services/main.service';
import { RenameDialogData } from '../../table/table.component';

@Component({
  selector: 'app-rename-modal',
  templateUrl: './rename-modal.component.html',
  styleUrls: ['./rename-modal.component.scss']
})
export class RenameModalComponent {
    constructor(
        private mainService: MainService,
        public dialogRef: MatDialogRef<RenameModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: RenameDialogData
    ) {}

    inputValue = '';

    onInput(event?: any) {
        this.inputValue = event.target.value;
    }

    renameElement() {
        if (this.inputValue.trim()) {
            this.mainService.renameElement(this.data.id, this.inputValue);
            this.inputValue = '';
            this.closeModal();
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}
