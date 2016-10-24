import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // element-left
  public imgLeftComp:Object = {
    '1': '../assets/images/1.jpg',
    'res': '../assets/images/res.jpg',
    'r1': '../assets/images/r1.jpg'
  };

  // element-right
  public imgRightComp:Object = {
    'b1': '../assets/images/b1.jpg',
  };



}
