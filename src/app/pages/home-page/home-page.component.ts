import { Component, OnInit } from '@angular/core';
import {CamionsService} from "../../shared/services/camions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  camions = []

  constructor(private camionsService: CamionsService, private router:Router) { }

  ngOnInit() {
    this.camions = this.camionsService.camions;
  }

  goToPage(url:string){
    this.router.navigate(["/trajets/"+url]);
  }


}
