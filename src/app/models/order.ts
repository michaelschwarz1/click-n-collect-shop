import { Product } from './product';
export class Order {
  id: string;
  date: Date;
  customerName: string;
  customerEmail: string;
  Products: Product[];
  TotalPrice: number;

}
