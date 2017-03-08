import { Component, OnInit } from '@angular/core';
import {CamionsService} from "../../shared/services/camions.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  camions = []

  constructor(private camionsService: CamionsService) { }

  ngOnInit() {
    this.camions = this.camionsService.camions;
  }

}
