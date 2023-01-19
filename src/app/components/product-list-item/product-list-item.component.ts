import { CartService } from './../../services/cart-service.service';
import { Product } from './../../models/product';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit,OnDestroy {
@Input("product") product:any;
amount:number=1;
selectAmount:number[]= [1,2,3,4,5,6,7,8,9,10,11,12]
  constructor(private cartService: CartService) {
   }
  ngOnDestroy(): void {
    // this.cartService.saveCart();
    // console.log(`saved cart`)
  }
  ngOnInit(): void {
  }
  addToCart(){
    // this.cartService.addToCart(this.product,this.amount);
    this.cartService.addToCart(this.product,this.amount);

  }


}
