import { Product } from './../models/product';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
items:Product[] = [];
ItemCount:number = 0;
TotalPrice:number = 0;
  constructor() { }
  addToCart(product:Product, amount:number) {
    for(let i= 0; i<amount; i++){
      this.items.push(product);
      console.log("adding: ",product);
    }
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getTotalPrice(){
    let sum = 0;
    this.items.forEach((x)=>{
      sum = +x.price;
    }
    );
  }
  getItemCount(){
    return this.items.length;
  }
}
