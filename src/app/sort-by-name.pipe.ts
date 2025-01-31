import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName',
  standalone: false
})
export class SortByNamePipe implements PipeTransform {

  transform(students: any[]): any[] {

    return students.sort((a:any,b:any) => {
      if(a.name < b.name) {return -1;}
      else if(a.name > b.name) {return 1;}
      else return 0;
    })
  }

}
