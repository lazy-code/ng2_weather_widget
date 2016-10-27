import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent {

  @Input() follow;

  public imgPath: string;

  constructor() {
    this.imgPath = "./app/teddy-bear/images/b1.jpg";
  }
}
