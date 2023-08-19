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
}
