import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCamionneurComponent } from './gestion-camionneur.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path:"gestion_camionneur",component:GestionCamionneurComponent}
    ])
  ],
  declarations: [GestionCamionneurComponent]
})
export class GestionCamionneurModule { }
