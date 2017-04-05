import { Injectable } from '@angular/core';
import {Camionneur} from "../models/camionneur.model";
import {map} from "rxjs/operator/map";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class CamionneursService {

  constructor(private _http:Http) {
  }

  getAllCamionneurFromAPI():Observable<Camionneur[]>{
   return this._http.get('http://localhost:8080/camionneur/all')
      .map(camionneurs => camionneurs.json());
  }

  postNewCamionneur(nom:string,prenom:string,utilisateur:string,motDePasse:string){
    let params ="utilisateur="+utilisateur+"&motDePasse="+motDePasse+"&nom="+nom+"&prenom="+prenom;
    let url ="http://localhost:8080/camionneur";
    let headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this._http.post(url,params,{headers:headers});
  }

  deleteCamionneur(utilisateur:string){
    let params ="utilisateur="+utilisateur;
    let url ="http://localhost:8080/camionneur/delete";
    let headers: Headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });

    return this._http.post(url,params,{headers:headers});
  }

}
