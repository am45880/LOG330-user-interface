import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {MaterialModule} from "@angular/material";
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [NotFoundPageComponent],
  exports : [NotFoundPageComponent]
})
export class ErrorsPagesModule { }
