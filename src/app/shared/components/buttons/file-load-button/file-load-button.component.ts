import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-file-load-button',
  templateUrl: './file-load-button.component.html',
  styleUrls: ['./file-load-button.component.scss']
})
export class FileLoadButtonComponent {
    @Input() title: string;

    @ViewChild('inputFileLoader', { static: false }) inputFileLoaderRef:ElementRef;

    constructor( private mainService: MainService ) {}

    onChange(event?: any) {
        const file = event.target.files[0];
        const elementName = file.name;
    
        this.mainService.addFile(elementName, file);
    }

    onClick() {
        this.inputFileLoaderRef.nativeElement.click();
    }
}
