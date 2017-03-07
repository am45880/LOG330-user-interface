import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PagesModule} from "./pages/pages.module";
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {NotFoundPageComponent} from "./pages/errors-pages/not-found-page/not-found-page.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    RouterModule.forRoot([
      { path:'', redirectTo:'/login' ,pathMatch:'full' },
      { path: '**', component: NotFoundPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
