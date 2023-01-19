import { CartItem } from './../../models/cartItem';
import { CartService } from './../../services/cart-service.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-sumamry-item',
  templateUrl: './cart-sumamry-item.component.html',
  styleUrls: ['./cart-sumamry-item.component.css']
})
export class CartSumamryItemComponent implements OnInit {
  @Input("item") cartItem!:CartItem;
  constructor(private cartService:CartService) { }


  ngOnInit(): void {
    console.log("init of cartItem detail")
  }

  deleteEntry(){
    this.cartService.deleteItem(this.cartItem.product);
    }

  getSelectAmount():number[]{
    return this.cartService.getSelectAmount(this.cartItem.product);
    }
}
