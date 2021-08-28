import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  products = this.firebase.collection('products').valueChanges();
  productList:Product[] = [];

  constructor(private firebase:AngularFirestore, private productsService:ProductsService) { }

  ngOnInit(): void {
    this.products.subscribe(data=>{
      this.productList = <Product[]>data;
      this.productsService.listProducts();

    })
  }

}
