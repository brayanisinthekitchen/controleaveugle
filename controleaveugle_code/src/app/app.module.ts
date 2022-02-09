import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./pages/login/login.component";
import { PagesModule } from "./pages/pages.module";
import { DashboardWithAccountComponent } from './pages/dashboard-with-account/dashboard-with-account.component';
import { PlaylistSearchComponent } from './pages/playlist-search/playlist-search.component';
import { ListPlaylistComponent } from './pages/list-playlist/list-playlist.component';
import { ResultsComponent } from './pages/results/results.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardWithAccountComponent,
    PlaylistSearchComponent,
    ListPlaylistComponent,
    ResultsComponent,
    HeaderComponent
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
