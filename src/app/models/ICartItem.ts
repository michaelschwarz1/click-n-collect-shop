import { IProduct } from './IProduct';
export interface ICartItem{
  cartId:string;
  product:IProduct;
  amount:number;
}
