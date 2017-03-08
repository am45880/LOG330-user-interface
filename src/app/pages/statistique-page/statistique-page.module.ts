import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import { StatistiquePageComponent } from './statistique-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path:"statistique", component: StatistiquePageComponent}
    ])
  ],
  declarations: [StatistiquePageComponent]
})
export class StatistiquePageModule { }
