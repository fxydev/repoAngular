import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './correo/correo.component';
import { ListacorreoComponent } from './listacorreo/listacorreo.component';
import { NuevoCorreoComponent } from './nuevo-correo/nuevo-correo.component';
import { AvisosComponent } from './avisos/avisos.component';
import { CorreosRecibidosComponent } from './correos-recibidos/correos-recibidos.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import {
  GoogleApiModule,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
} from "ng-gapi";
import { MenuComponent } from './menu/menu.component';
import { EnviarComponent } from './enviar/enviar.component';
import { HomeComponent } from './home/home.component';
import { VisualizarCorreoComponent } from './visualizar-correo/visualizar-correo.component';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "704748012860-ur1043lo48svfhmhd4m7kcn5lokdobdj.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  ux_mode: "popup",
  redirect_uri: "http://localhost:4200/loged",
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/gmail.labels",
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.readonly"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListacorreoComponent,
    NuevoCorreoComponent,
    AvisosComponent,
    CorreosRecibidosComponent,
    LoginComponent,
    MenuComponent,
    EnviarComponent,
    HomeComponent,
    VisualizarCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }