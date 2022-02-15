import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { PagesModule } from "./pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgPipesModule, TrurthifyPipe} from 'ngx-pipes';
import { JoueurComponent } from './joueur/joueur.component';
import { PartieComponent } from './partie/partie.component';
import { HeaderComponent } from './pages/header/header.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ChansonComponent } from './chanson/chanson.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    JoueurComponent,
    PartieComponent,
    ChansonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PagesModule,
    BrowserAnimationsModule,
    NgPipesModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
