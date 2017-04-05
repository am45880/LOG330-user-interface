import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";
import {CamionsService} from "../../shared/services/camions.service";
import {Camion} from "../../shared/models/camion.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-gestion-camion',
  templateUrl: './gestion-camion.component.html',
  styleUrls: ['./gestion-camion.component.css']
})
export class GestionCamionComponent implements OnInit {

   camions:Camion[];
   private camion$:Observable<any>;

  constructor(public dialog: MdDialog, private camionsService: CamionsService) {
  }

  ngOnInit() {
    this.camion$= this.camionsService.getAllCamions();
    this.displayCamion();
  }

  displayCamion(){
    this.camion$.subscribe(
      res => this.camions = res,
      err => console.log(err)
    );
  }

  deleteCamion(nom:string){
    this.camionsService.deleteCamions(nom).subscribe(
      ()=>this.displayCamion(),
       err => console.log(err)
    );

  }


  addCamion(nom:string,marque:string,plaque:string){
    this.camionsService.addCamionneur(nom,marque,plaque).subscribe(
      () => this.displayCamion(),
      err => console.log(err)
    );

  }

  displayConfirmDialog(){
    this.dialog.open(ConfirmDialogComponent);
  }

}
