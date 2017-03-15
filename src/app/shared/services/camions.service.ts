
import { Injectable } from '@angular/core';
import {Camion} from "../models/camion.model";

@Injectable()
export class CamionsService{

  private _camions:Camion[] = [
    {nom:"Gros",marque:"Mercedes",plaque:"PXG-347",trajet:
      [ {article:"Jelo",codePostal:"J4G-8G3",tempsEstime:"1:55",ordre:1},
        {article:"Coco",codePostal:"J4G-8G3",tempsEstime:"3:03",ordre:2},
        {article:"Viande",codePostal:"J4G-8G3",tempsEstime:"2:07",ordre:3}]},

    {nom:"Nouriture",marque:"Toyota",plaque:"PXG-347",trajet:
      [ {article:"Fruits",codePostal:"J4G-8G3",tempsEstime:"2:55",ordre:1},
        {article:"Souris",codePostal:"J4G-8G3",tempsEstime:"6:03",ordre:2},
        {article:"Clavier",codePostal:"J4G-8G3",tempsEstime:"0:27",ordre:3}]},

    {nom:"Sargui",marque:"Ford",plaque:"PXG-347",trajet:
      [ {article:"Pizza",codePostal:"J4G-8G3",tempsEstime:"1:23",ordre:1},
        {article:"Coca",codePostal:"J4G-8G3",tempsEstime:"0:23",ordre:2},
        {article:"Mola",codePostal:"J4G-8G3",tempsEstime:"1:03",ordre:3}]}
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
