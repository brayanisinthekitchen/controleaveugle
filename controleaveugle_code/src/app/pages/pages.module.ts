import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardWithAccountComponent } from './dashboard-with-account/dashboard-with-account.component';
import { HeaderComponent } from './header/header.component';
import { ListPlaylistComponent } from './list-playlist/list-playlist.component';
import { PartieComponent } from '../partie/partie.component';
import { PlaylistSearchComponent } from './playlist-search/playlist-search.component';
import { ResultsComponent } from './results/results.component';
import { JoueurComponent } from '../joueur/joueur.component';
import { PopUpResultsDialogComponent } from './pop-up-results-dialog/pop-up-results-dialog.component';
import { PopUpButtonComponent } from './pop-up-button/pop-up-button.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import {NgPipesModule, TrurthifyPipe} from 'ngx-pipes';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardWithAccountComponent,
    PlaylistSearchComponent,
    ListPlaylistComponent,
    ResultsComponent,
    PopUpResultsDialogComponent,
    PopUpButtonComponent,
    ProfileComponent,

  ],
  exports: [
  ],
  
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgPipesModule,
      MatDialogModule,
      FormsModule
     ],

  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
})
export class PagesModule { }
