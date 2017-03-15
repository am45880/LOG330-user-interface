import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import { StatistiquePageComponent } from './statistique-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      {path:"statistique", component: StatistiquePageComponent}
    ])
  ],
  declarations: [StatistiquePageComponent]
})
export class StatistiquePageModule {
  myValue : string = ""

}
