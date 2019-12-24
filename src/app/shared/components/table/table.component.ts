import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { RenameModalComponent } from '../modals/rename-modal/rename-modal.component';
import { MainService } from 'src/app/services/main.service';


export interface RenameDialogData { id: number };

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
    constructor(
        private dialog: MatDialog,
        private mainService: MainService,
        private router: Router,
    ) {}

    columns = ['', 'Name', 'Type', 'Modified', ''];

    openDialog(id: number) {
        this.dialog.open(RenameModalComponent, { data: { id } });
    }

    goToFolder(id: number) {
        this.router.navigate(['/file-manager', id]);
    }
}
