import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateFolderModalComponent } from '../shared/components/modals/create-folder-modal/create-folder-modal.component';
import { MainService } from '../services/main.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    constructor(
        private dialog: MatDialog,
        private mainService: MainService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params.id === 'null') {
                this.mainService.load();
            } else {
                const id = parseInt(params.id);
                this.mainService.goToFolder(id);
            }
        })
    }

    openDialog() {
        this.dialog.open(CreateFolderModalComponent);
    }

    goBack() {
        const folderQueue = this.mainService.folderQueue;
        let id = folderQueue[folderQueue.length - 2];

        if (folderQueue.length === 1) id = 'null';

        this.router.navigate(['/file-manager', id]);
    }
}
