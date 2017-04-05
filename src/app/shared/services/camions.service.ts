
import { Injectable } from '@angular/core';
import {Camion} from "../models/camion.model";
import {PointTrajet} from "../models/point-trajet.model";
import {findIndex} from "rxjs/operator/findIndex";
import {Http, Headers} from "@angular/http";

@Injectable()
export class CamionsService {

  private _camions: Camion[] = [
    {
      nom: "Gros",
      marque: "Mercedes",
      plaque: "PXG-347",
      trajet: [{article: "Jelo", codePostal: "J4G-8G3", tempsEstime: "1:55", ordre: 1},
        {article: "Coco", codePostal: "J4G-8G3", tempsEstime: "3:03", ordre: 2},
        {article: "Viande", codePostal: "J4G-8G3", tempsEstime: "2:07", ordre: 3}]
    },

    {
      nom: "Nouriture",
      marque: "Toyota",
      plaque: "PXG-347",
      trajet: [{article: "Fruits", codePostal: "J4G-8G3", tempsEstime: "2:55", ordre: 1},
        {article: "Souris", codePostal: "J4G-8G3", tempsEstime: "6:03", ordre: 2},
        {article: "Clavier", codePostal: "J4G-8G3", tempsEstime: "0:27", ordre: 3}]
    },

    {
      nom: "Sargui",
      marque: "Ford",
      plaque: "PXG-347",
      trajet: [{article: "Pizza", codePostal: "J4G-8G3", tempsEstime: "1:23", ordre: 1},
        {article: "Coca", codePostal: "J4G-8G3", tempsEstime: "0:23", ordre: 2},
        {article: "Mola", codePostal: "J4G-8G3", tempsEstime: "1:03", ordre: 3}]
    }
  ];

  constructor(private _http:Http) { }

  getAllCamions(){
    let url ="http://localhost:8080/camion/all";
    let headers: Headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });

    return this._http.get(url,{headers:headers})
      .map(res => res.json());
  }

  getCamionByNom(nom:string){
    let url ="http://localhost:8080/camion/camion_by_nom";
    let params ="nom="+nom;
    let headers: Headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });

    return this._http.post(url,params,{headers:headers})
      .map(res=>res.json());
  }

  deleteCamions(nom:string){
    let url ="http://localhost:8080/camion/delete";
    let params ="nom="+nom;
    let headers: Headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });

    return this._http.post(url,params,{headers:headers});
  }

  addCamionneur(nom:string,marque:string,plaque:string){
    let params ="nom="+nom+"&plaque="+plaque+"&marque="+marque;
    let url ="http://localhost:8080/camion";
    let headers: Headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });

    return this._http.post(url,params,{headers:headers});
  }

  saveCamion(camion:Camion){
    let url ="http://localhost:8080/camion/save";
    let headers: Headers = new Headers({
      'Content-Type' : 'application/json'
    });

   return this._http.post(url, JSON.stringify(camion), {headers:headers});
  }

}
