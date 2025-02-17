import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-home',
  standalone: false,  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  title = "Au petit village"
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
      
  }
}