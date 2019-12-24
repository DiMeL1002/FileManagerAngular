import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TableComponent } from './shared/components/table/table.component';
import { ButtonComponent } from './shared/components/buttons/button/button.component';
import { CreateFolderModalComponent } from './shared/components/modals/create-folder-modal/create-folder-modal.component';
import { RenameModalComponent } from './shared/components/modals/rename-modal/rename-modal.component';
import { FileLoadButtonComponent } from './shared/components/buttons/file-load-button/file-load-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    TableComponent,
    ButtonComponent,
    CreateFolderModalComponent,
    RenameModalComponent,
    FileLoadButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [CreateFolderModalComponent, RenameModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
