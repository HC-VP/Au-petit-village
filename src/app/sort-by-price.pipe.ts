import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: false
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], order: 'asc' | 'desc'): any[] {
    return products.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
  }
}
