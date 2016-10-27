import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemsFilter'
})
export class ItemsFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof args === 'string') {
        return value.filter(elem => elem.first === args);
    }
    return value;
  }

}
