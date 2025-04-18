import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service'; 
import { Product } from '../../services/products.service';





@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

   constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupération de l'ID depuis l'URL
    if (!isNaN(id)) {
      this.products = this.productService.getProducts(); // Récupération des infos du produit
  
    }
  }  

}
