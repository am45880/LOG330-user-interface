import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-gestion-camion',
  templateUrl: './gestion-camion.component.html',
  styleUrls: ['./gestion-camion.component.css']
})
export class GestionCamionComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {}

  displayConfirmDialog(){
    this.dialog.open(ConfirmDialogComponent);
  }
}
