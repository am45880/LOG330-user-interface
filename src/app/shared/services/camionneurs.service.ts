import { Injectable } from '@angular/core';
import {Camionneur} from "../models/camionneur.model";
import {map} from "rxjs/operator/map";
import {Http} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class CamionneursService {

  private _camionneurs:Camionneur[] = [
    {nom:"Smith",prenom:"Jerry", utilisateur:"jsmith"},
    {nom:"Leblanc",prenom:"Felix", utilisateur:"camio_champion"},
    {nom:"Tramblay",prenom:"George", utilisateur:"tamtamou"}
  ];

  constructor(private _http:Http) { }

  addToCamionneurs(camionneur:Camionneur){
    this._camionneurs.push(camionneur)
  }

  removeFromCamionneurs(camionneur:Camionneur){
    this._camionneurs.splice(this._camionneurs.indexOf(camionneur),1)
  }

  get camionneurs(): Camionneur[] {
    return this._camionneurs;
  }

  getCamionneurFromAPI(){
    console.log("wesh");
    return this._http.get('http://localhost:8080/')
      .do(x => console.log(x.json()))
      .map(receved => receved.json());
  }

}
