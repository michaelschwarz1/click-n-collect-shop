
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
items:Map<Product,number> = new Map<Product,number>();
cartItems:CartItem[] = [];


itemCount:number = 0;

cartItemAdded = new Subject();

  constructor() { }
  addToCart(product:Product, amount:number) {
      let oldValue = this.items.get(product);
      if(oldValue != undefined){
        this.items.set(product,oldValue + amount);
      }
      else{
        this.items.set(product,amount);
      }
      console.log(this.items);
      this.itemCount += +amount;
      this.cartItemAdded.next(this.itemCount)
    }

  getItems() {
    return this.items;
  }
  getItemList(){
    let list:CartItem[] = [];

    this.items.forEach((value:number,key: IProduct) =>list.push(new CartItem(key,value)));
    console.log(list);
    console.log(this.items);
    return list;
  }

  clearCart() {
    this.items = new Map<Product,number>();
    this.itemCount = 0;
    return this.items;
  }

}
