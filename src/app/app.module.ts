import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { freeApiService } from "./service/freeapi.service";
import { RouterModule } from '@angular/router';
import { Path } from 'leaflet';
import { LoginComponent } from "./login/login.component";
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: LoginComponent},
      {path: "acceuil", component: AcceuilComponent},
    ])
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
