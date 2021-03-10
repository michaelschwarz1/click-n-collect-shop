
import { IProduct } from './../models/IProduct';
import { CartItem } from './../models/cartItem';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  itemCount: number = 0;
  cartItemUpdate = new Subject();

  constructor() { }
  addToCart(product: Product, amount: number) {

    let itemExists = this.cartItems.find(item => item.product == product);
    if (itemExists != undefined && itemExists != null) {
      let index = this.cartItems.indexOf(itemExists);
      itemExists.amount += +amount;
      this.cartItems[index] = itemExists;
    } else {
      this.cartItems.push(new CartItem(product, amount));
    }
    this.itemCount += +amount;
    this.cartItemUpdate.next(this.itemCount)
  }

  getItemList() {
    return this.cartItems.filter(cartItem => cartItem.amount > 0);
  }

  clearCart() {
    this.cartItems = [];
    this.itemCount = 0;
    this.cartItemUpdate.next(this.itemCount)
    return this.cartItems;
  }
  deleteItem(item: CartItem) {
    this.itemCount -= item.amount;
    this.cartItemUpdate.next(this.itemCount)
    let index = this.cartItems.indexOf(item)
    item.amount = 0;
    this.cartItems[index] = item;
  }
}
