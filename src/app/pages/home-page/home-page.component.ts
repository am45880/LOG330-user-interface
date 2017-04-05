import { Component, OnInit } from '@angular/core';
import {CamionsService} from "../../shared/services/camions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private camions = []
  private camion$

  constructor(private camionsService: CamionsService, private router:Router) { }

  ngOnInit() {
    this.camion$ = this.camionsService.getAllCamions();
    this.updateCamion();

  }

  goToPage(url:string){
    this.router.navigate(["/trajets/"+url]);
  }

  updateCamion(){
    this.camion$.subscribe(
      res => this.camions=res
    );

  }

}
