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
cartItemSubject = new Subject();


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
      this.cartItemSubject.next(this.getItemList());
    }

  getItemList(){
    return this.cartItems.filter(cartItem => cartItem.amount >0);
  }

  clearCart() {
    this.cartItems = [];
    this.itemCount = 0;
    this.cartItemSubject.next(this.cartItems);
    return this.cartItems;
  }
deleteItem(item:CartItem){
  this.itemCount -= item.amount;
  this.cartItemAdded.next(this.itemCount)

  let index = this.cartItems.indexOf(item)
  item.amount=0;
  this.cartItems[index]=item;
  this.cartItemSubject.next(this.getItemList());
  }
}
