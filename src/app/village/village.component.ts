import { Component, OnInit } from '@angular/core';

type Item = {first:string, second:string, third:string, fourth:string};
type ImagesPath = {main:string, secondary1:string, secondary2:string};

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})

export class VillageComponent implements OnInit {

  public imagesPath: ImagesPath;
  public items: Item[];
  public title: string;
  public menu: string[];

  constructor() {
      //Image paths
      this.imagesPath = {
        main: "./app/village/images/1.jpg",
        secondary1: "./app/village/images/res.jpg",
        secondary2: "./app/village/images/r1.jpg"
      };

      // Items
      this.items = [
        {
          first: "Resort Address",
          second: "Sed ut perspiciatis",
          third: "Et harum quidem",
          fourth: "Tel:+1285 968 685"
        },
        {
          first: "Resort Address",
          second: "Sed ut perspiciatis",
          third: "Et harum quidem",
          fourth: "Tel:+1285 968 685"
        },
        {
          first: "Resort Address",
          second: "Sed ut perspiciatis",
          third: "Et harum quidem",
          fourth: "Tel:+1285 968 685"
        }
      ];

      // Title
      this.title = "Righteous indignation & like";

      // Menu
      this.menu = ["Hotel", "Fishing", "Tours", "Weather"];
  }

  ngOnInit() {
  }

}
