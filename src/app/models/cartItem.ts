import { ICartItem } from './ICartItem';
import { IProduct } from './IProduct';
import { Product } from './product';
import { v4 as uuidv4 } from 'uuid';



export class CartItem implements ICartItem {
  product:IProduct;
  amount:number;
  constructor(product:IProduct,amount:number){
    this.product = product;
    this.amount = amount;
  }

}
