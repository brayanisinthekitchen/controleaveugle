import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
=======
>>>>>>> 72465f827315389bcb0da85f6184814149a11f99



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
