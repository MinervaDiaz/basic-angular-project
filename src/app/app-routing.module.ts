import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarChoferesComponent } from './ListarChoferes/listar-choferes/listar-choferes.component';
import { AgregarChoferComponent } from './agregarChofer/agregar-chofer/agregar-chofer.component';
import { DetallesChoferComponent } from './detalles-chofer/detalles-chofer.component';

const routes: Routes = [
  {path: 'ListarChoferes', component:ListarChoferesComponent},
  {path: 'agregarChofer', component:AgregarChoferComponent},
  //en el path delcaramos que está esperando una vraible de tipo id
  {path: 'DetalleChofer/:id', component:DetallesChoferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
