import { Component, OnInit } from '@angular/core';
import {CamionsService} from "../../shared/services/camions.service";
import {Camion} from "../../shared/models/camion.model";
import {ActivatedRoute} from "@angular/router";
import {PointTrajet} from "../../shared/models/point-trajet.model";

@Component({
  selector: 'app-trajet-page',
  templateUrl: './trajet-page.component.html',
  styleUrls: ['./trajet-page.component.css']
})
export class TrajetPageComponent implements OnInit {

  private camion:Camion;
  private urlParameter:string;

  lat: number = 45.494669;
  lng: number = -73.563219;

  constructor(private camionsService:CamionsService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.urlParameter=this._route.snapshot.params['camion'];
    this.camion= this.camionsService.camions.filter(item => item.nom== this.urlParameter )[0];
  }

  removePointDeTrajet(point:PointTrajet){
    this.camion.trajet.splice(this.camion.trajet.indexOf(point),1);
  }

  ajouterPointDetrajet(){
    this.camion.trajet.push({article:null,codePostal:null,tempsEstime:null,ordre:this.camion.trajet.length+1});
  }

  savePoin(point:PointTrajet){
    console.log(point);
  }
}
