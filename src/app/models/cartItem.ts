import { ICartItem } from './ICartItem';
import { IProduct } from './IProduct';
import { Product } from './product';
import { v4 as uuidv4 } from 'uuid';
import { ThrowStmt } from '@angular/compiler';



export class CartItem implements ICartItem {
  cartId:string;
  product:IProduct;
  amount:number;
  constructor(cartId:string, product:IProduct,amount:number){
    this.cartId = cartId;
    this.product = product;
    this.amount = amount;
  }

}
