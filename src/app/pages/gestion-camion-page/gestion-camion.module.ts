import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCamionComponent } from './gestion-camion.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      {path:"gestion_camion" , component:GestionCamionComponent}
    ]),
    SharedModule
  ],
  declarations: [GestionCamionComponent],
  exports:[GestionCamionComponent],
  entryComponents:[ConfirmDialogComponent]
})
export class GestionCamionModule { }
