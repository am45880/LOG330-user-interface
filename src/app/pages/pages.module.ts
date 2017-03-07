import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorsPagesModule} from "./errors-pages/errors-pages.module";
import {LoginPageModule} from "./login-page/login-page.module";
import {HomePageComponent} from "./home-page/home-page.component";
import {HomePageModule} from "./home-page/home-page.module";
import {GestionCamionModule} from "./gestion-camion-page/gestion-camion.module";
import {GestionCamionneurModule} from "./gestion-camionneur-page/gestion-camionneur.module";
import {TrajetPageModule} from "./trajet-page/trajet-page.module";
import {StatistiquePageModule} from "./statistique-page/statistique-page.module";

@NgModule({
  imports: [
    CommonModule,
    ErrorsPagesModule,
    LoginPageModule,
    HomePageModule,
    GestionCamionModule,
    GestionCamionneurModule,
    TrajetPageModule,
    StatistiquePageModule
  ]
})

export class PagesModule {

}
