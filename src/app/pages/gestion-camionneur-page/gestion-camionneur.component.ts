///<reference path="../../../../node_modules/rxjs/Observable.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";
import {CamionneursService} from "../../shared/services/camionneurs.service";
import {Camionneur} from "../../shared/models/camionneur.model";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-gestion-camionneur',
  templateUrl: './gestion-camionneur.component.html',
  styleUrls: ['./gestion-camionneur.component.css']
})
export class GestionCamionneurComponent implements OnInit {

  private camionneurs:Camionneur[];

  private camionneur$:Observable<Camionneur[]>;


  constructor(private activate:ActivatedRoute,public dialog: MdDialog, public camionneurService: CamionneursService) { }

  ngOnInit() {
    this.camionneur$=this.camionneurService.getAllCamionneurFromAPI();
    this.updateCamionneurs();
  }

  updateCamionneurs() {
    this.camionneur$.subscribe(
      res => {
        this.camionneurs = res;
      }
    )
  }

  createCamionneur(nom:string,prenom:string,utilisateur:string,password:string) {
    this.camionneurService.postNewCamionneur(nom, prenom, utilisateur, password).subscribe(
      () => this.updateCamionneurs()
    );
  }

   deleteCamionneur(utilisateur:string){
     this.camionneurService.deleteCamionneur(utilisateur).subscribe(
       ()=>this.updateCamionneurs(),
       err=>console.log(err)
     )
   }


}
