import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChoferservicsService } from 'src/app/servicios/choferservics.service';

@Component({
  selector: 'app-agregar-chofer',
  templateUrl: './agregar-chofer.component.html',
  styleUrls: ['./agregar-chofer.component.css']
})
export class AgregarChoferComponent {

  //view child para ocultar los campos
  @ViewChild("nombre")
  private nombre!:ElementRef

   @ViewChild("app")
  private app!:ElementRef

   @ViewChild("apm")
  private apm!:ElementRef

   @ViewChild("tel")
  private tel!:ElementRef

   @ViewChild("fnac")
  private fnac!:ElementRef

   @ViewChild("lic")
  private lic!:ElementRef

  @ViewChild("foto")
  private foto!:ElementRef

  @ViewChild("disp")
  private disp!:ElementRef

  //siempre tener un constructor del servicios que construimos al principio
  constructor(private service: ChoferservicsService){

  }
  guardar(){
    
  }

}
