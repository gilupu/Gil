import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./Modules/Login/login.module').then(m => m.LoginModule) },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: () => import('./Modules/Dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
