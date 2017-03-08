import { Injectable } from '@angular/core';
import {Camionneur} from "../models/camionneur.model";


@Injectable()
export class CamionneursService {

  private _camionneurs:Camionneur[] = [
    {nom:"Smith",prenom:"Jerry", utilisateur:"jsmith"},
    {nom:"Leblanc",prenom:"Felix", utilisateur:"camio_champion"},
    {nom:"Tramblay",prenom:"George", utilisateur:"tamtamou"}
  ];

  constructor() { }

  addToCamionneurs(camionneur:Camionneur){
    this._camionneurs.push(camionneur)
  }

  removeFromCamionneurs(camionneur:Camionneur){
    this._camionneurs.splice(this._camionneurs.indexOf(camionneur),1)
  }

  get camionneurs(): Camionneur[] {
    return this._camionneurs;
  }

}
