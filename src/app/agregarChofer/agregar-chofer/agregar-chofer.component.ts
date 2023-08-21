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

  @ViewChild("urlfoto")
  private urlfoto!:ElementRef

  @ViewChild("disp")
  private disp!:ElementRef

  //siempre tener un constructor del servicios que construimos al principio
  constructor(private service: ChoferservicsService){

  }
  guardar(){
    //primero modificamor el choferservice y ponemos el metodo inseratr chofer, después movemos este método

    //constante de método = valor del html
    const nombre = this.nombre.nativeElement.value;
    const app = this.app.nativeElement.value;
    const apm = this.apm.nativeElement.value;
    const tel = this.tel.nativeElement.value;
    const fnac = this.fnac.nativeElement.value;
    const lic = this.lic.nativeElement.value;
    const urlfoto = this.urlfoto.nativeElement.value;
    const disp = this.disp.nativeElement.value;

    this.service.InsertChofer( nombre, app, apm, tel, fnac, lic, urlfoto, disp);
  }

}
