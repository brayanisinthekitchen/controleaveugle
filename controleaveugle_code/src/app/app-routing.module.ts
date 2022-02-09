import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardWithAccountComponent } from './pages/dashboard-with-account/dashboard-with-account.component';
<<<<<<< HEAD
import { PartieComponent } from './partie/partie.component';
=======
import { ResultsComponent } from './pages/results/results.component';
>>>>>>> 21dd0291b8a6644666ab4bc06dead260ee782565

const routes: Routes = [
  {path: 'partie', component: PartieComponent},
  {path: 'dashboard', component: DashboardWithAccountComponent},
  {path: 'results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
