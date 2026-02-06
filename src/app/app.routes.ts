import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario';
import { UsuariosComponent } from './components/usuarios/usuarios';

export const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'registro', pathMatch: 'full' },
      { path: 'registro', component: RegistroUsuarioComponent },
      { path: 'usuarios', component: UsuariosComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];