import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarChoferesComponent } from './ListarChoferes/listar-choferes/listar-choferes.component';
import { AgregarChoferComponent } from './agregarChofer/agregar-chofer/agregar-chofer.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DetallesChoferComponent } from './detalles-chofer/detalles-chofer.component';
import { EditarchoferComponent } from './EditarChofer/editarchofer/editarchofer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarChoferesComponent,
    AgregarChoferComponent,
    DetallesChoferComponent,
    EditarchoferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
