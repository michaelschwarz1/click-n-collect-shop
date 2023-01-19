import { CartItem } from './../../models/cartItem';
import { Product } from './../../models/product';
import { CartService } from './../../services/cart-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-summary-table',
  templateUrl: './cart-summary-table.component.html',
  styleUrls: ['./cart-summary-table.component.css']
})
export class CartSummaryTableComponent implements OnInit,OnDestroy {
  isLoading:boolean = true;
  cartItems:CartItem[] = [];
  itemSubject$:Subscription;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.isLoading = true;
    // this.cartItems = this.cartService.getItemsGroupedByProduct();
    this.itemSubject$ = this.cartService.cartItemSubject.subscribe((data) => {
      this.cartItems = data;
      console.log(`new data: ${data}`);
    console.log(data);});

    console.log(`cartItemLenght: ${this.cartItems.length}`)
    this.isLoading = false;
  }
    ngOnDestroy(): void {
      if(this.itemSubject$){
        this.itemSubject$.unsubscribe();
      }

  }
}
