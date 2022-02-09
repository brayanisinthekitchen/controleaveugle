import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { PagesModule } from "./pages/pages.module";
<<<<<<< HEAD
import { LoginComponent } from './pages/login/login.component';
=======
import { DashboardWithAccountComponent } from './pages/dashboard-with-account/dashboard-with-account.component';
import { PlaylistSearchComponent } from './pages/playlist-search/playlist-search.component';
import { ListPlaylistComponent } from './pages/list-playlist/list-playlist.component';
import { PartieComponent } from './partie/partie.component';
import { ResultsComponent } from './pages/results/results.component';
import { HeaderComponent } from './pages/header/header.component';
>>>>>>> b89d14942a0a598405004fb33565d280388c3bf5

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
