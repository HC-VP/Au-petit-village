import { Injectable } from '@angular/core';


export interface Product {
  id: number;
  name: string;    
  price: number; 
  picture: string; 
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: "Figurine Astérix",
      price: 29.99,
      picture: "assets/img/asterix.png",
      description: "Figurine du célèbre personnage éponyme de la BD Astérix"      
    },
    {
      id: 2,
      name: "Figurine Obélix",
      price: 29.99,
      picture: "./assets/img/obelix.png",
      description: "Figurine d'Obélix, le meilleur ami d'Astérix."      
    },
    {
      id: 3,
      name: "Figurine Panoramix",
      price: 29.99,
      picture: "./assets/img/panoramix.png",
      description: "Figurine de Panoramix, druide et ami d'Astérix."      
    },
    {
      id: 4,
      name: "Figurine Idéfix",
      price: 19.99,
      picture: "./assets/img/idefix.png",
      description: "Figurine artisanale de Idéfix, célèbre chien d'Obélix"
  }
  ];

  

  constructor() {}


  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
  
}
