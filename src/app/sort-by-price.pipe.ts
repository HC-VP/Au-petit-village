import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './services/products.service';

@Pipe({
  name: 'sortByPrice',
  standalone: false
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], order: 'asc' | 'desc' = 'asc'): any[] {
    return products.sort((a, b) => 
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
  }
  
}

