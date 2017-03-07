import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCamionComponent } from './gestion-camion.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path:"gestion_camion" , component:GestionCamionComponent}
    ])
  ],
  declarations: [GestionCamionComponent],
  exports:[GestionCamionComponent]
})
export class GestionCamionModule { }
