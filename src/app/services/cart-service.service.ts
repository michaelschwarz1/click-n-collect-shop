
import { IProduct } from './../models/IProduct';
import { CartItem } from './../models/cartItem';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CartService {
cartItems:CartItem[] = [];


itemCount:number = 0;

cartItemAdded = new Subject();

  constructor() { }
  addToCart(product:Product, amount:number) {

    let itemExists = this.cartItems.find(item => item.product == product);
    if(itemExists!= undefined && itemExists !=null){
      let index = this.cartItems.indexOf(itemExists);
      itemExists.amount += +amount;
      this.cartItems[index] = itemExists;
    }else{
      this.cartItems.push(new CartItem(product,amount));
    }
      this.itemCount += +amount;
      this.cartItemAdded.next(this.itemCount)
    }

  getItemList(){
    return this.cartItems.filter(cartItem => cartItem.amount >0);
  }

  clearCart() {
    this.cartItems = [];
    this.itemCount = 0;
    return this.cartItems;
  }
deleteItem(item:CartItem){
  let index = this.cartItems.indexOf(item)
  item.amount=0;
this.cartItems[index]=item;
  }
}
