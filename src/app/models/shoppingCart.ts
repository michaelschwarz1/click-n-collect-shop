import { CartItem } from './cartItem';
import { v4 as uuidv4 } from 'uuid';
export class ShoppingCart {
CartItemList:CartItem[] = [];
Id:string;

constructor() {
  this.Id = uuidv4();
}

}
