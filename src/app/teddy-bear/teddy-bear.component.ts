import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit {

  public imgPath: string;
  public title: string;
  public followers: number;
  public following: number;

  constructor() {
    this.title = "Nam libero voluptatem";
    this.imgPath = "./app/teddy-bear/images/b1.jpg";
    this.followers = 2850;
    this.following = 675;
  }

  ngOnInit() {
  }

}
