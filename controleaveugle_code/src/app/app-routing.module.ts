import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardWithAccountComponent } from './pages/dashboard-with-account/dashboard-with-account.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardWithAccountComponent},
  {path: 'results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
