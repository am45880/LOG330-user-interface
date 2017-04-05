import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "../../shared/util/auth-guard";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      { path:'home',component: HomePageComponent,canActivate:[AuthGuard]}
    ])
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule {

}
