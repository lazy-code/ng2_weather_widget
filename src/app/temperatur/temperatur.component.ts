import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent {

  @Input() weather;
}
