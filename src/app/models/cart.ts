import { Product } from './product';
export class Cart {
  id: string = "";
  Products: Product[] = [];
  ItemCount:number = 0;
  TotalPrice:number = 0;
}
