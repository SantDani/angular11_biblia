export class Product{
  name: string;
  price : number;
  img : string;

  constructor( name = 'empty', price = 0, img=''){
    this.name = name;
    this.price = price;
    this.img = img;
  }
}
