
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Main files
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { CorreoComponent } from './correo/correo.component';
import { ListacorreoComponent } from './listacorreo/listacorreo.component';
import { NuevoCorreoComponent } from './nuevo-correo/nuevo-correo.component';
//import { AvisosComponent } from './Components/avisos/avisos.component';
import { LoginComponent } from './login/login.component';

// View and Menu
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { EnviarComponent } from './enviar/enviar.component';
import { VisualizarCorreoComponent } from './visualizar-correo/visualizar-correo.component';
import { CorreosRecibidosComponent } from './correos-recibidos/correos-recibidos.component';

// Material Libs
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// External Libs
import {
  GoogleApiModule,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
} from "ng-gapi";

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
    // AvisosComponent,
    CorreosRecibidosComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    EnviarComponent,
    VisualizarCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }