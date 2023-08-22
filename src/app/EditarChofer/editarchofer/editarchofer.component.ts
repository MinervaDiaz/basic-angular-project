import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChoferservicsService } from 'src/app/servicios/choferservics.service';

@Component({
  selector: 'app-editarchofer',
  templateUrl: './editarchofer.component.html',
  styleUrls: ['./editarchofer.component.css'],
})
export class EditarchoferComponent {
  @ViewChild('nombre')
  private nombre!: ElementRef;

  @ViewChild('app')
  private app!: ElementRef;

  @ViewChild('apm')
  private apm!: ElementRef;

  @ViewChild('tel')
  private tel!: ElementRef;

  @ViewChild('fnac')
  private fnac!: ElementRef;

  @ViewChild('lic')
  private lic!: ElementRef;

  @ViewChild('urlfoto')
  private urlfoto!: ElementRef;

  @ViewChild('disp')
  private disp!: ElementRef;

  private id_param:any;
  private id_chofer: number =0;

  //siempre tener un constructor del servicios que construimos al principio
  constructor(private route:ActivatedRoute, private Service:ChoferservicsService){
    this.id_param = this.route.params.subscribe(params => {
      this.id_chofer =+ params['id']
      console.log(this.id_chofer);
      this.Service.choferbyID(this.id_chofer)
    })
  }
  get datachofer(){
    return this.Service.chofer
  }

  guardar() {
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

    this.Service.EditarChofer(this.id_chofer, nombre, app, apm, tel, fnac, lic, urlfoto, disp);
  }
}
