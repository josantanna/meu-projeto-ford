import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ComparacaoComponent } from './pages/comparacao/comparacao.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'comparacao', component: ComparacaoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];