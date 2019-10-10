import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any[], search: string): any {
    if (!value) { return []; }
    if (!search) { return value; }
    return value.filter(val => val.FName.indexOf(search) != -1);


    // return value.filter(function (val) {
    //   return val.FName.indexOf(search) != -1
    // });

  }

}
