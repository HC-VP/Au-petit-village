import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './services/products.service';

@Pipe({
  name: 'sortByName',
  standalone: false
})
export class SortByNamePipe implements PipeTransform {

  transform(value: Product[]): any[] {

    return value.sort((a:any,b:any) => {
      if(a.name < b.name) {return -1;}
      else if(a.name > b.name) {return 1;}
      else return 0;
    })
  }

}
