import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: string[], value: string): string[] {
    if(value) {
      return list.filter(e => e.toLowerCase().indexOf(value) > -1);
    }
    return list;
  }

}
