import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";
import {CamionneursService} from "../../shared/services/camionneurs.service";

@Component({
  selector: 'app-gestion-camionneur',
  templateUrl: './gestion-camionneur.component.html',
  styleUrls: ['./gestion-camionneur.component.css']
})
export class GestionCamionneurComponent implements OnInit {

  camionneurs= [] ;

  constructor(public dialog: MdDialog, public camionneurService: CamionneursService) { }

  ngOnInit() {
    this.camionneurs= this.camionneurService.camionneurs
  }

  displayConfirmDialog(){
    this.dialog.open(ConfirmDialogComponent)
  }

}
