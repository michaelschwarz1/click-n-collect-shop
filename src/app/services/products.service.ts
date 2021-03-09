import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
