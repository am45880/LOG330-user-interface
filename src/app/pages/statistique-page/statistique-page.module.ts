import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import { StatistiquePageComponent } from './statistique-page.component';
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "../../shared/util/auth-guard";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      {path:"statistique", component: StatistiquePageComponent,canActivate:[AuthGuard]}
    ])
  ],
  declarations: [StatistiquePageComponent]
})
export class StatistiquePageModule {
  myValue : string = ""

}
