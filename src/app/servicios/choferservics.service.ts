import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChoferservicsService {

public listadechoferes : any [];

  constructor(private http: HttpClient, private router:Router) {
    this.listadechoferes = []
   }
   Getchoferes():void{
    //consumo de API MVC en angular
    this.http.get("http://localhost:57239/API/ChoferesAPI/GetList").subscribe(
      (respuesta:any)=>{
        //console.log(respuesta);
        this.listadechoferes = respuesta;
      }
      );
   }
   InsertChofer(nombre:string, app:string, apm:string, tel:string, fnac:string, lic:string, urlfoto:string, disp:string){
    this.http.post("http://localhost:57239/API/ChoferesAPI/Insert",{
        "nombre": nombre,
        "apellido_Paterno": app,
        "apellido_Materno": apm,
        "telefono": tel,
        "fecha_Nacimiento": fnac,
        "licencia": lic,
        "url_foto": urlfoto,
        //queda pending poner la disponibilidad
        "disponibilidad": disp

    }).subscribe((respuesta:any) => {console.log(respuesta);})
    //nos suscribimos a la respuesta
   }
}
