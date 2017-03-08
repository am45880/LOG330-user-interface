import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trajet-page',
  templateUrl: './trajet-page.component.html',
  styleUrls: ['./trajet-page.component.css']
})
export class TrajetPageComponent implements OnInit {

  lat: number = 45.494669;
  lng: number = -73.563219;

  constructor() { }

  ngOnInit() {
  }

}
