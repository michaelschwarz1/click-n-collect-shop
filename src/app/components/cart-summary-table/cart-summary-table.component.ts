import { CartItem } from './../../models/cartItem';
import { Product } from './../../models/product';
import { CartService } from './../../services/cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary-table',
  templateUrl: './cart-summary-table.component.html',
  styleUrls: ['./cart-summary-table.component.css']
})
export class CartSummaryTableComponent implements OnInit {
  isLoading:boolean = true;
  cartItems:CartItem[] = [];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItemList();
    this.isLoading = false;
  }

 countUnique(iterable:Iterable<Product>) {
  return new Set(iterable).size;
}
deleteEntry(data:CartItem){
this.cartService.deleteItem(data);
}
}
