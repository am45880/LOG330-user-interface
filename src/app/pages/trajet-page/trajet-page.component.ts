import { Component, OnInit } from '@angular/core';
import {CamionsService} from "../../shared/services/camions.service";
import {Camion} from "../../shared/models/camion.model";
import {ActivatedRoute} from "@angular/router";
import {PointTrajet} from "../../shared/models/point-trajet.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-trajet-page',
  templateUrl: './trajet-page.component.html',
  styleUrls: ['./trajet-page.component.css']
})
export class TrajetPageComponent implements OnInit {

  private camion:Camion=null;
  private camion$:Observable<any>;
  private trajet:PointTrajet[];

  private urlParameter:string;

  lat: number = 45.494669;
  lng: number = -73.563219;

  constructor(private camionsService:CamionsService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.urlParameter=this._route.snapshot.params['camion'];
    this.camion$ = this.camionsService.getCamionByNom(this.urlParameter);
    this.updateCamion();
  }

  updateCamion(){
    this.camion$.subscribe(
      res=>{
        console.log();
        this.camion=res;
        this.trajet=this.camion.trajet;
      },
          err=>console.log(err)

    );
  }

  saveCamion(){
    this.camionsService.saveCamion(this.camion).subscribe(
      (res)=>console.log(),
      err=>console.log(err)
    )
  }

  ajouterPointDetrajet(){
    this.camion.trajet.push({article:null,codePostal:null,tempsEstime:null,ordre:this.camion.trajet.length+1});
  }

  supprimer(point:PointTrajet){
    this.camion.trajet.splice(this.camion.trajet.indexOf(point), 1)
  }


}
