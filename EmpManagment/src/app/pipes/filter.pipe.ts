import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[]): any {
    if (value == null) {
      return null;
    }
    return value;
  }

}
