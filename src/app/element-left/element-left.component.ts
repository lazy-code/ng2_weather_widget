import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent implements OnInit {

  @Input()
  imgLeftComp: Object;

  constructor() {
  }

  ngOnInit() {
  }

}
