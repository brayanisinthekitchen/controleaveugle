import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { PagesModule } from "./pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgPipesModule} from 'ngx-pipes';
import { JoueurComponent } from './joueur/joueur.component';
import { PartieComponent } from './partie/partie.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    JoueurComponent,
    PartieComponent,
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
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
