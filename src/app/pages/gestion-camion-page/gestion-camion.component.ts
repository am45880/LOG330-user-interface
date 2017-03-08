import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";
import {CamionsService} from "../../shared/services/camions.service";

@Component({
  selector: 'app-gestion-camion',
  templateUrl: './gestion-camion.component.html',
  styleUrls: ['./gestion-camion.component.css'],
  providers:[CamionsService]
})
export class GestionCamionComponent implements OnInit {

   camions = []


  constructor(public dialog: MdDialog, private camionsService: CamionsService) { }

  ngOnInit() {
    this.camions = this.camionsService.camions
   }

  displayConfirmDialog(){
    this.dialog.open(ConfirmDialogComponent);
  }


}
