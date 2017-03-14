import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrajetPageComponent } from './trajet-page.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import { AgmCoreModule } from 'angular2-google-maps/core';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyArHxPHuvHILhyVyje6aA0mwpNIrD0BLtM'
    }),
    RouterModule.forChild([
      {path:"trajets/:camion",component:TrajetPageComponent}
    ])
  ],
  declarations: [TrajetPageComponent]
})
export class TrajetPageModule { }
