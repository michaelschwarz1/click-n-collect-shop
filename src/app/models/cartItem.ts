import { ICartItem } from './ICartItem';
import { IProduct } from './IProduct';
import { Product } from './product';
import { v4 as uuidv4 } from 'uuid';
import { ThrowStmt } from '@angular/compiler';



export class CartItem implements ICartItem {
  id:string;
  cartId:string;
  product:IProduct;
  amount:number;
  constructor(id:string, cartId:string, product:IProduct,amount:number){
    this.id = id;
    this.cartId = cartId;
    this.product = product;
    this.amount = amount;
  }

}
