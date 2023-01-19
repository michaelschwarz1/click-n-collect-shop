import { ShoppingCart } from './../models/shoppingCart';
import { IProduct } from './../models/IProduct';
import { CartItem } from './../models/cartItem';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { v4 as uuidv4 } from 'uuid';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartId: string = uuidv4();
  private shoppingCart : ShoppingCart = new ShoppingCart(this._cartId);
  cartItemSubject = new Subject<CartItem[]>();

  cartStoreObservable: Observable<any>;
  storeRef!: AngularFirestoreDocument<ShoppingCart>;

  itemCount: number = 0;

  cartItemAdded = new Subject<number>();

  constructor(private firebase: AngularFirestore) {
    this.storeRef = this.firebase.doc<ShoppingCart>(`shoppingCart/${this._cartId}`);
  }

  public addToCart(product:Product, amount:number):void {
    let entry: CartItem = new CartItem(uuidv4(),product,amount);
    this.shoppingCart.items.push(entry);
    this.itemCount += +amount;
    this.cartItemAdded.next(this.itemCount)
    this.cartItemSubject.next(this.shoppingCart.items);
    console.log('added a new Item to the Cart');
  }

  public saveCart():void{
    this.storeRef.set(this.shoppingCart);
    this.storeRef.valueChanges().subscribe(v=>this.shoppingCart = v);
  }
  getItemsGroupedByProduct(){
    let group:CartItem[] = [];
    this.shoppingCart.items.forEach(item =>{
      let aggregate = group.find(existing => existing.product.id == item.product.id);
      if(aggregate){
        aggregate.amount += +item.amount;
      }else{
        group.push(item);
      }
    })
    return group;
  }
  // addToCartDb(product: Product, amount: number) {
  //   let cartItem: CartItem = {cartId: this._cartId, product: product, amount: amount }
  //   this.cartStoreCollection.add(cartItem).then((ref) => {
  //     console.log("successful written Document with id: ", ref.id);
  //     this.itemCount += +amount;

  //   }).catch((error) => {
  //     console.error("Error writing document to db", error);
  //   });

  // }

  // addToCartUpdate(product: Product, amount: number) {
  //   // let pObject:Object = Object.assign(Object,product);
  //   // let sc:ShoppingCart = {id:"",cartId:this.cartId,products:[]};
  //   let cartItem: CartItem = {cartId: this._cartId, product: product, amount: amount }
  //   this.cartStoreCollection.ref.where('product', '==', product).get().then((res)=>{

  //   });
  //   this.cartStoreCollection.doc(this._cartId).set(cartItem, {merge: true})
  //   // let query = this.shoppingCartRef.ref.where('cartId', '==', this.cartId).get().then((doc) => {
  //   //   if (doc.empty) {
  //   //     this.shoppingCartRef.add(sc).then((result)=>{
  //   //       console.log("added new shoppingCart", result.id);
  //   //     })
  //   //   }
  //   // });
  //   // this.shoppingCartRef.snapshotChanges()

  // }
  // getItemList() {
  //   return this.cartItems.filter(cartItem => cartItem.amount > 0);
  // }

  // getItemsFromDb() {
  //   return this.cartStoreObservable;
  // }

  // clearCart() {
  //   this.cartItems = [];
  //   this.itemCount = 0;
  //   this.cartItemSubject.next(this.cartItems);
  //   return this.cartItems;
  // }
  deleteItem(item: Product) {

    this.shoppingCart.items  = this.shoppingCart.items.filter(i=> i.product.id != item.id);
    this.itemCount = this.shoppingCart.items.length;
  }

  getSelectAmount(product: Product): number[] {
    return Array(12).fill(1).map((x, i) => i + 1);
  }
}
