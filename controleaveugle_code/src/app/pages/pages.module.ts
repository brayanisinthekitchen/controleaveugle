import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent

  ],

  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule

     ]
})
export class PagesModule { }
