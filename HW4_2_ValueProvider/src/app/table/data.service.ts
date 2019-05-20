import { Injectable } from "@angular/core";
import { Products } from './products';

@Injectable() 
export class DataService {
    idGen(){
        return  Math.floor(Math.random() * (10000)) + 999;
    }
  getData(){
     const PRODUCTS: Products[] = [
  
  { id: this.idGen(), name : 'product 8', price : 800, category: 'Category 1' },
  { id: this.idGen(), name : 'product 9', price : 900, category: 'Category 1' },
  { id: this.idGen(), name : 'product 10', price : 1000, category: 'Category 1' }
];
return PRODUCTS;
}
}

