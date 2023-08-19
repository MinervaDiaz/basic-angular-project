import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarChoferesComponent } from './ListarChoferes/listar-choferes/listar-choferes.component';
import { AgregarChoferComponent } from './agregarChofer/agregar-chofer/agregar-chofer.component';

const routes: Routes = [
  {path: 'ListarChoferes', component:ListarChoferesComponent},
  {path: 'agregarChofer', component:AgregarChoferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
