import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './services/products.service';

@Pipe({
  name: 'filterByName',
  standalone: false
})

export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!products) return [];
    if (!searchTerm) return products;
    

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}