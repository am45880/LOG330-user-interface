import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";
import {CamionneursService} from "../../shared/services/camionneurs.service";
import {Camionneur} from "../../shared/models/camionneur.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gestion-camionneur',
  templateUrl: './gestion-camionneur.component.html',
  styleUrls: ['./gestion-camionneur.component.css']
})
export class GestionCamionneurComponent implements OnInit {

  camionneurs:Camionneur[]= [] ;
  camionneursAPI:Camionneur[]= [] ;

  constructor(private activate:ActivatedRoute,public dialog: MdDialog, public camionneurService: CamionneursService) { }

  ngOnInit() {
    this.camionneurs= this.camionneurService.camionneurs;
    this.camionneurService.getCamionneurFromAPI().subscribe(
      res=> this.camionneursAPI = res,
      err => console.log("une erreur kho")
    );

    // console.log("Voila premier camioneur " + this.camionneursAPI[0].prenom);
  }

  removecamionneur(camionneur:Camionneur){
    this.dialog.open(ConfirmDialogComponent);
    this.camionneurService.removeFromCamionneurs(camionneur);
  }

  addCamionneur(camionneur:Camionneur){
    this.camionneurService.addToCamionneurs(camionneur)
  }

  displayConfirmDialog(){
    this.dialog.open(ConfirmDialogComponent)
  }



}
