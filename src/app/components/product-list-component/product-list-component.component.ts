import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  productList: Product[] = [{id:"",name: "Waldhonig", description:"\"Der Dunkle\" ", image:"https://www.bienenprodukte-shop.de/images/product_images/original_images/img_1627_waldhonig1.jpg", price:6.0},
  {id:"2", name: "Tannenhonig", description: "Reiner Weißtannenhonig", image: "https://www.bienenprodukte-shop.de/images/product_images/original_images/img_1627_waldhonig1.jpg", price: 6.5},
  {id: "3", name: "Blütenhonig", description: "\"Der Feste\"  - Cremig gerührt.", image: "https://images-na.ssl-images-amazon.com/images/I/61lvwIBQF5L._SY445_.jpg", price: 6.0}
];
  constructor() { }

  ngOnInit(): void {
  }

}
