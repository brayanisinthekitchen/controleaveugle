import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardWithAccountComponent } from './pages/dashboard-with-account/dashboard-with-account.component';
import { PartieComponent } from './partie/partie.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'partie', component: PartieComponent},
  {path: 'dashboard', component: DashboardWithAccountComponent},
  {path: 'results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
