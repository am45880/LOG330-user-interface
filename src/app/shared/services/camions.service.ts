import { Injectable } from '@angular/core';
import {Camion} from "../models/camion.model";

@Injectable()
export class CamionsService {

  private _camions:Camion[] = [
    {nom:"Gros",marque:"Mercedes",plaque:"PXG-347"},
    {nom:"Nouriture",marque:"Toyota",plaque:"PXG-347"},
    {nom:"Sargui",marque:"",plaque:"PXG-347"}
  ];

  addToCamionneurs(camion:Camion){
    this._camions.push(camion)
  }

  removeFromCamionneurs(camion:Camion){
    this._camions.splice(this._camions.indexOf(camion),1)
  }


  get camions(): Camion[] {
    return this._camions;
  }

  constructor() { }

}
