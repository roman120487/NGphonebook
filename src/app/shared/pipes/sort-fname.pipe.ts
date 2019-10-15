import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFName'
})
export class SortFNamePipe implements PipeTransform {

  transform(value: any[], sortFNameValue: boolean): any {
    if (sortFNameValue) {
      return value.sort(function (a, b) {
        let nameA = a.FName.toLowerCase();
        let nameB = b.FName.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        else { return 0; }
      });
    }
    if (!sortFNameValue) { return value.reverse(); }

  }
}
