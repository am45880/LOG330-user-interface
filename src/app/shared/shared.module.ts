import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpModule,
    RouterModule.forChild([
      { path:'my_account', redirectTo:'/my_account'}
    ])
  ],
  declarations: [NavBarComponent, ConfirmDialogComponent],
  exports : [NavBarComponent,ConfirmDialogComponent],
})
export class SharedModule { }
