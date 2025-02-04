import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: false
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[], search: string): any[] {
    if (!search) return products;
    return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }
}