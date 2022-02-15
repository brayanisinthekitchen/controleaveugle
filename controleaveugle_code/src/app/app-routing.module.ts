import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardWithAccountComponent } from './pages/dashboard-with-account/dashboard-with-account.component';
import { PartieComponent } from './partie/partie.component';
import { ResultsComponent } from './pages/results/results.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ChansonComponent } from './chanson/chanson.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'partie', component: PartieComponent},
  {path: 'dashboard', component: DashboardWithAccountComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'home', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'accueil',component:HomeComponent},
  {path: 'chanson',component:ChansonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
