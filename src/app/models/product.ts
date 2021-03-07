import { Url } from "node:url";

export class Product {
  id: string ="";
  name: string = "";
  description:string = "";
  image:string = "";
  price: number = 0;

  public Product(id:string, name:string, description:string, image:string, price:number){
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
  }

}
