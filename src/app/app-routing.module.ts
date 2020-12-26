import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CorreosRecibidosComponent } from './correos-recibidos/correos-recibidos.component';
import { EnviarComponent } from './enviar/enviar.component';
import { CorreoComponent } from './correo/correo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mails', component: CorreosRecibidosComponent },
  { path: 'send', component: EnviarComponent },
  { path: 'mail', component: CorreoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
