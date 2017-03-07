import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path:'my_account', redirectTo:'/my_account'}
    ])
  ],
  declarations: [NavBarComponent],
  exports : [NavBarComponent]
})
export class SharedModule { }
