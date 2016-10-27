import { Directive } from '@angular/core';


// Directives
// - component
// @Component({}) - our components

// - attribute
// не имеют своего шаблона и не являются виджетом
// дополняют функциональность какого-то компонента

// - structure
// отвечаю за модификации DOM дерева
// *ngIf, *ngFor, *ngSwitch

// *ngFor - из-за let ограничен блоком видимости
// может использовать на родительском элементе
// а в дочерних доп условия с *ngIf, *ngSwitch
// let i = index;
// predefined definitions fir every iteration: first, last even odd

// [ngClass]="{cssClass: expression}" -> [ngClass]="{'active': true}"
// [ngStyle]="{style: expression}" -> [ngStyle]="{'color': 'gre' + 'en'}"


// Directives
// - default from angular
// - custom, own

// host - элемент на котором будет активирована директива


@Directive({
  selector: '[appMylog]',
  host: {
    '(click)':'dosomething($event)',
    '(input)':'log($event)',
  }
})
export class MylogDirective {

  dosomething(data) {
    console.log('===', 'click', data);
  }

  log(data) {
    console.log("===", 'input', data);
  }


}
