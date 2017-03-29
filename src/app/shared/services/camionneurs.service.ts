import { Injectable } from '@angular/core';
import {Camionneur} from "../models/camionneur.model";
import {map} from "rxjs/operator/map";
import {Http} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()

export class CamionneursService {

  constructor(private _http:Http) {
  }

  getAllCamionneurFromAPI(){
    return this._http.get('http://localhost:8080/camionneur/all')
      .map(res => res = res.json())
  }

  postNewCamionneurToAPI(camionneur:Camionneur){

     return this._http.post("http://localhost:8080/camionneur",
         "?nom="+camionneur.nom+
         "&prenom="+camionneur.prenom+
         "&utilisateur="+camionneur.utilisateur+
          "&motDePasse="+camionneur.motDePasse
     ).subscribe()

  }

  deleteCamionneurFromAPI(utilisateur:string){
    return this._http.delete("localhost:8080/camionneur?utilisateur=iphone")
  }

}
