import { Component } from '@angular/core';

type FollowObj = {title:string, followers:number, following:number};
type WeatherObj = {title:string, airTemp:number, waterTemp:number};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public menu: string[];
  public title: string;
  public number: number;
  public follow: FollowObj;
  public weather: WeatherObj;
  public followData;
  public weatherData;

  constructor() {
    // Menu for village component
    this.menu = ["Hotel", "Fishing", "Tours", "Weather"];

    // Title
    this.title = "Hot Weather Widget";

    // Follow data object
    this.followData = {
      'Hotel': {
        title: 'Hotel Name',
        followers: 234,
        following: 1233
      },
      'Fishing': {
        title: 'Fishing Name',
        followers: 26734,
        following: 15233
      },
      'Tours': {
        title: 'Tours Name',
        followers: 634,
        following: 156233
      },
      'Weather':{
        title: 'Weather Name',
        followers: 2534,
        following: 1563
      }
    };

    //Weather data object
    this.weatherData = {
      'Hotel': {
        title: 'Hotel Name',
        airTemp: 29,
        waterTemp: 20
      },
      'Fishing': {
        title: 'Fishing Name',
        airTemp: 55,
        waterTemp: 44
      },
      'Tours': {
        title: 'Tours Name',
        airTemp: 22,
        waterTemp: 12
      },
      'Weather':{
        title: 'Weather Name',
        airTemp: 44,
        waterTemp: 26
      }
    };
  }

  setElemActivity(elem) {
    Object.keys(this.followData).map(name => {
      if ( elem === name ){
        this.follow = this.followData[name];
        this.weather = this.weatherData[name];
      }
    });
  };

  ngOnInit() {
    //default follow data
    this.follow = {
      title: 'Hotel Name',
      followers: 234,
      following: 1233
    };
    // default weather data
    this.weather = {
      title: 'Hotel weather',
      airTemp: 29,
      waterTemp: 20
    }
  }

  // Class work 20.10
  // final(data) {
  //   console.log("===", "app controller", data);
  // }
  // end Class work 20.10

}
