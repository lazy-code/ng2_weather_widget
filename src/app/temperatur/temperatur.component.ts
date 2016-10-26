import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent implements OnInit {

  public waterTemp: string;
  public airTemp: string;
  public title: string;

  constructor() {
    this.waterTemp = "20";
    this.airTemp = "14";
    this.title = "Et harum quidem";
  }

  ngOnInit() {
  }

}
