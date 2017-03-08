import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrajetPageComponent } from './trajet-page.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyArHxPHuvHILhyVyje6aA0mwpNIrD0BLtM'
    }),
    RouterModule.forChild([
      {path:"trajets",component:TrajetPageComponent}
    ])
  ],
  declarations: [TrajetPageComponent]
})
export class TrajetPageModule { }
