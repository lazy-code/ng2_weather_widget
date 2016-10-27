import { Component, Input, Output, EventEmitter } from '@angular/core';

type Item = {first:string, second:string, third:string, fourth:string};
type ImagesPath = {main:string, secondary1:string, secondary2:string};

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})

export class VillageComponent {

  @Input() menu;
  @Output() activityClick = new EventEmitter();

  // Class work 20.10
  // @Output() villageClick = new EventEmitter();
  //
  // next(data) {
  //   console.log("===", "village controller", data);
  //   this.villageClick.emit(data);
  // }
  // end Class work 20.10

  public imagesPath: ImagesPath;
  public items: Item[];
  public title: string;
  public selectedItem: string;

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
          first: "Hotel",
          second: "Sed ut perspiciatis",
          third: "Et harum quidem",
          fourth: "Tel:+1285 968 685"
        },
        {
          first: "Fishing",
          second: "Sed ut perspiciatis",
          third: "Et harum quidem",
          fourth: "Tel:+1285 968 685"
        },
        {
          first: "Tours",
          second: "Sed ut perspiciatis",
          third: "Et harum quidem",
          fourth: "Tel:+1285 968 685"
        },
        {
          first: "Weather",
          second: "Sed ut perspiciatis",
          third: "Et harum quidem",
          fourth: "Tel:+1285 968 685"
        }
      ];

      // Title
      this.title = "Righteous indignation & like";
  }

  getElement(elem) {
    this.activityClick.emit(elem);
  }

  itemClick(event) {
    event.preventDefault();
    this.selectedItem = event.target.innerText;
  }

  ngOnInit() {
  }

}
