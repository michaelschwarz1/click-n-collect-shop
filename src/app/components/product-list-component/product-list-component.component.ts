import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  productList: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    let product1 = new Product("id", "Waldhonig", "\"Der Dunkle\" ", "https://www.bienenprodukte-shop.de/images/product_images/original_images/img_1627_waldhonig1.jpg", 6.0);
    let product2 = new Product("id", "Tannenhonig", "Reiner Weißtannenhonig", "https://www.bienenprodukte-shop.de/images/product_images/original_images/img_1627_waldhonig1.jpg", 6.5);
    let product3 = new Product("id", "Blütenhonig", "\"Der Feste\"  - Cremig gerührt.", "https://images-na.ssl-images-amazon.com/images/I/61lvwIBQF5L._SY445_.jpg", 6.0);

    this.productList.push(product1);
    this.productList.push(product2);
    this.productList.push(product3);
  }

}
