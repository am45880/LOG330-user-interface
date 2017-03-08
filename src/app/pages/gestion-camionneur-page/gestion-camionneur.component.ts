import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-gestion-camionneur',
  templateUrl: './gestion-camionneur.component.html',
  styleUrls: ['./gestion-camionneur.component.css']
})
export class GestionCamionneurComponent implements OnInit {

  camionneurs= [
    {nom:"Smith",prenom:"Jerry", utilisateur:"jsmith"},
    {nom:"Leblanc",prenom:"Felix", utilisateur:"camio_champion"},
    {nom:"Tramblay",prenom:"George", utilisateur:"tamtamou"}
  ]

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }
  displayConfirmDialog(){
    this.dialog.open(ConfirmDialogComponent)
  }

}
