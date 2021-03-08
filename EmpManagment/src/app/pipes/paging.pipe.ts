import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paging'
})
export class PagingPipe implements PipeTransform {

  transform(value: any[], currentPageIndex: number, pageSize: number): any {
    if (value == null) {
      return null;
    }

    let resultArrary = [];
    for (let i = currentPageIndex * pageSize; i < (currentPageIndex + 1) * pageSize; i++) {
      if (value[i]) {
        resultArrary.push(value[i]);
      }
    }
    return resultArrary;
  }

}
