import { CartItem } from './../models/cartItem';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsDb = this.firebase.collection('products').valueChanges({idField:'id'});
  constructor(private firebase:AngularFirestore) { }
  listProducts(){
    return this.productsDb;
  }
}
