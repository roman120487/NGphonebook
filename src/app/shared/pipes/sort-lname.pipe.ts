import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortLName'
})
export class SortLNamePipe implements PipeTransform {

  transform(value: any[], sortLNameValue: boolean): any {
    if (sortLNameValue) {
      return value.sort(function (a, b) {
        let nameA = a.LName.toLowerCase();
        let nameB = b.LName.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        else { return 0; }
      });
    }
    if (!sortLNameValue) { return value.reverse(); }

  }


}
