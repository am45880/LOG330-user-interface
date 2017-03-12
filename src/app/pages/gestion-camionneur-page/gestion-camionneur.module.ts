import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCamionneurComponent } from './gestion-camionneur.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {path:"gestion_camionneur",component:GestionCamionneurComponent}
    ])
  ],
  declarations: [GestionCamionneurComponent]
})
export class GestionCamionneurModule { }
