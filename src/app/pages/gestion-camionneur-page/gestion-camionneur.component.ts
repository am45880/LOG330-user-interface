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

  camionneurs:Camionneur[]=[];


  constructor(private activate:ActivatedRoute,public dialog: MdDialog, public camionneurService: CamionneursService) { }

  ngOnInit() {
    this.displayCamionneur();
  }

  displayCamionneur(){
    this.camionneurService.getAllCamionneurFromAPI().subscribe(
      res => this.camionneurs = res
    );
  }

  creerNouveauCamionneur(camionneur:Camionneur) {
    console.log("Creer nouveau camionneur");
    this.camionneurService.postNewCamionneurToAPI(camionneur);
    this.displayCamionneur();
  }

  removeCamionneur(camionneur:Camionneur){
    this.camionneurService.deleteCamionneurFromAPI(camionneur.utilisateur);
  }


}
