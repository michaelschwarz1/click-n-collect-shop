import { IProduct } from './IProduct';
export interface ICartItem{
  id:string;
  cartId:string;
  product:IProduct;
  amount:number;
}
