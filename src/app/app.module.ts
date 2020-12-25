import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importacion de FormsModule necesaria para poder usar ngModel con radioButton
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './correo/correo.component';
import { ListacorreoComponent } from './listacorreo/listacorreo.component';


@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListacorreoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
