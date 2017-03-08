import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";
import {CamionsService} from "../../shared/services/camions.service";
import {Camion} from "../../shared/models/camion.model";

@Component({
  selector: 'app-gestion-camion',
  templateUrl: './gestion-camion.component.html',
  styleUrls: ['./gestion-camion.component.css']
})
export class GestionCamionComponent implements OnInit {

   camions:Camion[] = [];

  constructor(public dialog: MdDialog, private camionsService: CamionsService) { }

  ngOnInit() {
    this.camions = this.camionsService.camions;
   }

   removeCamion(camion:Camion){
     this.dialog.open(ConfirmDialogComponent);
     this.camionsService.removeFromCamionneurs(camion);
   }

  addCamion(camion:Camion){
    this.camionsService.addToCamionneurs(camion)
  }

  displayConfirmDialog(){
    this.dialog.open(ConfirmDialogComponent);
  }

}
