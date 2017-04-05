import {Injectable, OnInit} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class AuthService implements OnInit{

  public utilisateurConnecte:string = "Backo";

  constructor(private _http:Http) { }

  ngOnInit(): void {

  }

  public authenticate(utilisateur:string,motDePasse:string){
    let params ="utilisateur="+utilisateur+"&motDePasse="+motDePasse;
    let url ="http://localhost:8080/auth/login";
    let headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this._http.post(url,params,{headers:headers});
  }



}
