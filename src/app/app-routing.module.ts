import { RegistrarComponent } from './components/registrar/registrar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainHomeComponent } from './components/main-home/main-home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: MainHomeComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: '**', component: MainHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
