import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChoferservicsService } from '../servicios/choferservics.service';

@Component({
  selector: 'app-detalles-chofer',
  templateUrl: './detalles-chofer.component.html',
  styleUrls: ['./detalles-chofer.component.css']
})


export class DetallesChoferComponent {
  private id_param:any;
  private id_chofer: number =0;

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
}
