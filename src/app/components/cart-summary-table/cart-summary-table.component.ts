import { CartItem } from './../../models/cartItem';
import { Product } from './../../models/product';
import { CartService } from './../../services/cart-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-summary-table',
  templateUrl: './cart-summary-table.component.html',
  styleUrls: ['./cart-summary-table.component.css']
})
export class CartSummaryTableComponent implements OnInit {
  isLoading:boolean = true;
  cartItems:CartItem[] = [];
  cartItemObs:Observable<CartItem[]> = new Observable<CartItem[]>();
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItemList();
    this.cartService.cartItemSubject.subscribe((data) => {
      this.cartItems = <CartItem[]>data;
      console.log(data);});
    this.isLoading = false;
  }
deleteEntry(data:CartItem){
this.cartService.deleteItem(data);
}
}
