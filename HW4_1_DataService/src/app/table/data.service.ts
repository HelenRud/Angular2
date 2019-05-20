import { Injectable } from "@angular/core";
import { Products } from './products';

@Injectable() 
export class DataService {
    idGen(){
        return  Math.floor(Math.random() * (10000)) + 999;
    }
  PRODUCTS: Products[] = [
  { id: this.idGen(), name : 'product 1', price : 100, category: 'Category 2' },
  { id: this.idGen(), name : 'product 2', price : 200, category: 'Category 1' },
  { id: this.idGen(), name : 'product 3', price : 300, category: 'Category 1' },
  { id: this.idGen(), name : 'product 4', price : 400, category: 'Category 3' },
  { id: this.idGen(), name : 'product 5', price : 500, category: 'Category 2' },
  { id: this.idGen(), name : 'product 6', price : 600, category: 'Category 2' },
  { id: this.idGen(), name : 'product 7', price : 700, category: 'Category 3' },
  { id: this.idGen(), name : 'product 8', price : 800, category: 'Category 1' },
  { id: this.idGen(), name : 'product 9', price : 900, category: 'Category 1' },
  { id: this.idGen(), name : 'product 10', price : 1000, category: 'Category 1' }];
    
}

