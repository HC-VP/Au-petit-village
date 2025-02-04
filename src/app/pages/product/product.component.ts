import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {name: "Figurine Astérix"},
    {name: "Figurine Obélix"},
    {name: "Figurine Panoramix"},
    {name: "Figurine Idéfix"}    
  ]

}
