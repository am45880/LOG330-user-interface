import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrajetPageComponent } from './trajet-page.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path:"trajets",component:TrajetPageComponent}
    ])
  ],
  declarations: [TrajetPageComponent]
})
export class TrajetPageModule { }
