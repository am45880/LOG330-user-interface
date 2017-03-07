import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import {RouterModule} from "@angular/router";
import {LoginPageComponent} from "./login-page.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path:'login',component: LoginPageComponent},
    ])
  ],
  declarations: [LoginPageComponent],
  exports:[LoginPageComponent]
})
export class LoginPageModule { }
