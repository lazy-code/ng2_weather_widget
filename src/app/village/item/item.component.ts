import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Output() itemClick = new EventEmitter();

  doSomething(x) {
    console.log("===", "item controller", x);
    this.itemClick.emit(x);
  }

}
