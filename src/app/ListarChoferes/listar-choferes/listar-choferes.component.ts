import { Component, OnInit } from '@angular/core';
import { ChoferservicsService } from 'src/app/servicios/choferservics.service';

@Component({
  selector: 'app-listar-choferes',
  templateUrl: './listar-choferes.component.html',
  styleUrls: ['./listar-choferes.component.css']
})
export class ListarChoferesComponent implements OnInit {

  //recuperamos la lista de choferes
  get listachoferes(){
    return this.service.listadechoferes;
  }

  constructor (private service: ChoferservicsService){
    service.Getchoferes();
  }
  ngOnInit(): void {

  }

}
