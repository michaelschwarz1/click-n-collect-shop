import { IProduct } from './IProduct';
export interface ICartItem{
  id:string;
  product:IProduct;
  amount:number;
}
