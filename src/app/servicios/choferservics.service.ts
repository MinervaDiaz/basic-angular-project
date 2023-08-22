import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ChoferservicsService {
  public listadechoferes: any[];
  //agregamos esto para editar un chofer
  public chofer: any;

  constructor(private http: HttpClient, private router: Router) {
    this.listadechoferes = [];
    this.chofer = {};
  }
  Getchoferes(): void {
    //consumo de API MVC en angular
    this.http
      .get('http://localhost:57239/API/ChoferesAPI/GetList')
      .subscribe((respuesta: any) => {
        //console.log(respuesta);
        this.listadechoferes = respuesta;
      });
  }
  InsertChofer(
    nombre: string,
    app: string,
    apm: string,
    tel: string,
    fnac: string,
    lic: string,
    urlfoto: string,
    disp: string
  ) {
    this.http
      .post('http://localhost:57239/API/ChoferesAPI/Insert', {
        nombre: nombre,
        apellido_Paterno: app,
        apellido_Materno: apm,
        telefono: tel,
        fecha_Nacimiento: fnac,
        licencia: lic,
        url_foto: urlfoto,
        //queda pending poner la disponibilidad
        disponibilidad: disp,
      })
      .subscribe((respuesta: any) => {
        console.log(respuesta);
      });

    //agregado par las alertas
    Swal.fire({
      title: 'Genial!',
      text: 'Ahora tienes un nuevo chofer',
      icon: 'success',
      confirmButtonText: 'Cool',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarChoferes']);
      }
    });
    //nos suscribimos a la respuesta
  }

  //nuevo method para editar chofer
  choferbyID(id: number) {
    this.http
      .get('http://localhost:57239/API/ChoferesAPI/GetById/' + id)
      .subscribe((respuesta: any) => {
        console.log(respuesta);
        this.chofer = respuesta;
      });
  }

  EditarChofer(
    id: number,
    nombre: string,
    app: string,
    apm: string,
    tel: string,
    fnac: string,
    lic: string,
    urlfoto: string,
    disp: string
  ) {
    this.http
      .post('http://localhost:57239/API/ChoferesAPI/Update', {
        id_chofer: id,
        nombre: nombre,
        apellido_Paterno: app,
        apellido_Materno: apm,
        telefono: tel,
        fecha_Nacimiento: fnac,
        licencia: lic,
        url_foto: urlfoto,
        //queda pending poner la disponibilidad
        disponibilidad: disp,
      })
      .subscribe((respuesta: any) => {
        console.log(respuesta);
      });

    //agregado par las alertas
    Swal.fire({
      title: 'Genial!',
      text: 'Este chofer ha sido actualizado',
      icon: 'success',
      confirmButtonText: 'Cool',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarChoferes']);
      }
    });
    //nos suscribimos a la respuesta
  }

  EliminarChofer(id:number): void {
    //consumo de API MVC en angular
    this.http
      .delete('http://localhost:57239/API/ChoferesAPI/Delete/' + id)
      .subscribe((respuesta: any) => {
        console.log(respuesta + id);
        this.EliminarChofer = respuesta;
      });
      Swal.fire({
        title: 'Genial!',
        text: 'Chofer eliminar',
        icon: 'success',
        confirmButtonText: 'Cool',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
  }
}
