import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {environment} from '../environments/environment'
import { HomeComponent } from './components/home/home.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'users', component:UserManagementComponent},
  { 
    path: '**',
    redirectTo: environment["defaultRoute"] || 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
