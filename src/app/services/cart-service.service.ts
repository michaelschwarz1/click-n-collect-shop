import { IProduct } from './../models/IProduct';
import { CartItem } from './../models/cartItem';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartId: string = "myTestCart";
  cartItems: CartItem[] = []
  cartItemSubject = new Subject();

  cartStoreObservable: Observable<any>;
  cartStoreCollection!: AngularFirestoreCollection<CartItem>;
  // shoppingCartRef: AngularFirestoreCollection<ShoppingCart>;
  // cartListCollection!: AngularFirestoreCollection;
  itemCount: number = 0;

  cartItemAdded = new Subject();

  constructor(private firebase: AngularFirestore) {
    this.cartStoreCollection = this.firebase.collection('cartItems', ref => ref.where('cartId', '==', this.cartId).where('amount', '>', 0));
    // this.cartStoreObservable = this.cartStoreCollection.valueChanges();
    this.cartStoreObservable = this.cartStoreCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CartItem;
        // data.id = a.payload.doc.id;
        return data;
      });
    }));

  }

  addToCartDb(product: Product, amount: number) {
    let cartItem: CartItem = {cartId: this.cartId, product: product, amount: amount }
    this.cartStoreCollection.add(cartItem).then((ref) => {
      console.log("successful written Document with id: ", ref.id);
      this.itemCount += +amount;
      this.cartItemAdded.next(this.itemCount)
      this.cartItemSubject.next(this.getItemsFromDb());
    }).catch((error) => {
      console.error("Error writing document to db", error);
    });

  }

  addToCartUpdate(product: Product, amount: number) {
    // let pObject:Object = Object.assign(Object,product);
    // let sc:ShoppingCart = {id:"",cartId:this.cartId,products:[]};
    let cartItem: CartItem = {cartId: this.cartId, product: product, amount: amount }
    this.cartStoreCollection.ref.where('product', '==', product).get().then((res)=>{

    });
    this.cartStoreCollection.doc(this.cartId).set(cartItem, {merge: true})
    // let query = this.shoppingCartRef.ref.where('cartId', '==', this.cartId).get().then((doc) => {
    //   if (doc.empty) {
    //     this.shoppingCartRef.add(sc).then((result)=>{
    //       console.log("added new shoppingCart", result.id);
    //     })
    //   }
    // });
    // this.shoppingCartRef.snapshotChanges()

  }
  getItemList() {
    return this.cartItems.filter(cartItem => cartItem.amount > 0);
  }

  getItemsFromDb() {
    return this.cartStoreObservable;
  }

  clearCart() {
    this.cartItems = [];
    this.itemCount = 0;
    this.cartItemSubject.next(this.cartItems);
    return this.cartItems;
  }
  deleteItem(item: CartItem) {
    item.amount = 0;

    this.cartStoreCollection.doc(this.cartId).set(item, {merge: true})
    // this.itemCount -= item.amount;
    // this.cartItemAdded.next(this.itemCount)

    // let ref = this.cartStoreCollection.doc(item.id)

    //alternatively do not delete but set amount to 0
    // item.amount = 0;
    // ref.update(item)

    // Hard delete
    // ref.delete().then((success) => {
    //   console.log("delted item: ", item)
    // }).catch((error) => {
    //   console.log("error deleting")
    // });

  }

  getSelectAmount(product: Product): number[] {
    return Array(12).fill(1).map((x, i) => i + 1);
  }
}
