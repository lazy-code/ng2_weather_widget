import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public menu: string[];
  public title: string;
  public number: number;

  constructor() {
    // Menu for village component
    this.menu = ["Hotel", "Fishing", "Tours", "Weather"];

    // Title
    this.title = "Hot Weather Widget";

    // this.number = 34;
  }

  // Class work 20.10
  // final(data) {
  //   console.log("===", "app controller", data);
  // }
  // end Class work 20.10

}
