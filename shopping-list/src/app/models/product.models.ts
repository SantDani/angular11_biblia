export class Product{

  name : string;
  quantity : number;
  department : string;
  buyed: boolean;

  constructor(name = '', quantity = 0, department = ''){

    this.name = name;
    this.quantity = quantity;
    this.department = department;
    this.buyed = false;
  }
}
