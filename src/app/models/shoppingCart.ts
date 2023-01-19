import { ICartItem } from './ICartItem';
import { CartItem } from './cartItem';
import { v4 as uuidv4 } from 'uuid';
import { Product } from './product';
export class ShoppingCart {
  items: ICartItem[];
  cartId:string;

  constructor(cartId:string) {
    this.cartId = cartId;
    this.items = [];
  }
}
