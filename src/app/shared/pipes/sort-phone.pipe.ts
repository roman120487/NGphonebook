import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPhone'
})
export class SortPhonePipe implements PipeTransform {

  transform(value: any[], sortPhoneValue): any {
    if (sortPhoneValue) {
      return value.sort(function (a, b) {
        let nameA = a.phone.toLowerCase();
        let nameB = b.phone.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        else { return 0; }
      });
    }
    if (!sortPhoneValue) { return value.reverse(); }

  }

}
