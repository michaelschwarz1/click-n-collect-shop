import { IProduct } from './IProduct';
export class Product implements IProduct{
  id: string;
  name: string;
  description:string;
  image:string;
  price: number;

  constructor(id:string, name:string, description:string, image:string, price:number){
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
  }

}
