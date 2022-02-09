import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { PagesModule } from "./pages/pages.module";
import { DashboardWithAccountComponent } from './pages/dashboard-with-account/dashboard-with-account.component';
import { PlaylistSearchComponent } from './pages/playlist-search/playlist-search.component';
import { ListPlaylistComponent } from './pages/list-playlist/list-playlist.component';
import { PartieComponent } from './partie/partie.component';
import { ResultsComponent } from './pages/results/results.component';
import { HeaderComponent } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardWithAccountComponent,
    PlaylistSearchComponent,
    ListPlaylistComponent,
    ResultsComponent,
    HeaderComponent,
    PartieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PagesModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
