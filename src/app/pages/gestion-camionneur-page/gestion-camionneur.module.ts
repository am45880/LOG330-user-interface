import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCamionneurComponent } from './gestion-camionneur.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"gestion_camionneur",component:GestionCamionneurComponent}
    ])
  ],
  declarations: [GestionCamionneurComponent]
})
export class GestionCamionneurModule { }