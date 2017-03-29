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


  camionneursAPI;


 private camionneurs:Camionneur[] = [
    {nom:"Smith",prenom:"Jerry", utilisateur:"jsmith",motDePasse:"secret123"},
    {nom:"Leblanc",prenom:"Felix", utilisateur:"camio_champion",motDePasse:"secret123"},
   {nom:"Tremblay",prenom:"George", utilisateur:"tamtamou",motDePasse:"secret123"}
  ];

  constructor(private activate:ActivatedRoute,public dialog: MdDialog, public camionneurService: CamionneursService) { }

  ngOnInit() {
    // this.camionneursAPI = this.camionneurService.getAllCamionneurFromAPI().subscribe(
    //   res => this.camionneurs = res
    // );
  }

  // removecamionneur(camionneur:Camionneur){
  //   this.dialog.open(ConfirmDialogComponent);
  //   this.camionneurService.removeFromCamionneurs(camionneur);
  // }
  //
  // addCamionneur(camionneur:Camionneur){
  //   this.camionneurService.addToCamionneurs(camionneur)
  // }
  //
  // displayConfirmDialog(){
  //   this.dialog.open(ConfirmDialogComponent)
  // }



}
