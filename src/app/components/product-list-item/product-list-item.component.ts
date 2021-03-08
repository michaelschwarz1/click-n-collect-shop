import { CartService } from './../../services/cart-service.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
@Input("product") product:any;
amount:number=1;
  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.product,this.amount);
  }

}
