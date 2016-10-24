import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element-right',
  templateUrl: './element-right.component.html',
  styleUrls: ['./element-right.component.css']
})
export class ElementRightComponent implements OnInit {

  @Input()
  public imgRightComp: Object;

  constructor() { }

  ngOnInit() {
  }

}
