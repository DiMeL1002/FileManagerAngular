import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-create-folder-modal',
  templateUrl: './create-folder-modal.component.html',
  styleUrls: ['./create-folder-modal.component.scss']
})
export class CreateFolderModalComponent {
    constructor(
        private mainService: MainService,
        public dialogRef: MatDialogRef<CreateFolderModalComponent>,
    ) {}

    inputValue = '';

    onInput(event?: any) {
        this.inputValue = event.target.value;
    }

    createFolder() {
        if (this.inputValue.trim()) {
            this.mainService.addFolder(this.inputValue);
            this.inputValue = '';
            this.closeModal();
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}
