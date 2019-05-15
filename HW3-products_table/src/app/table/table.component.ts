import { Component, OnInit, Input } from '@angular/core';
import { Products } from './products';

const PRODUCTS: Products[] = [{ id: 1, name : 'product 1', price : 100, category: 'Category 2' },
  { id: 2, name : 'product 2', price : 200, category: 'Category 1' },
  { id: 3, name : 'product 3', price : 300, category: 'Category 1' },
  { id: 4, name : 'product 4', price : 400, category: 'Category 3' },
  { id: 5, name : 'product 5', price : 500, category: 'Category 2' },
  { id: 6, name : 'product 6', price : 600, category: 'Category 2' },
  { id: 7, name : 'product 7', price : 700, category: 'Category 3' },
  { id: 8, name : 'product 8', price : 800, category: 'Category 1' },
  { id: 9, name : 'product 9', price : 900, category: 'Category 1' },
  { id: 10, name : 'product 10', price : 1000, category: 'Category 1' }];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  ProductsList: Products[] = PRODUCTS;
  ProductsRes: Products[]=[];
  newProduct: Products[]=[];
  i: number =0;
  choice: string;
  idValue: number;
  priceValue: number;
  categoryValue: string;
  nameValue: string;
  @Input()
  rows(){
    return this.ProductsList.length;
}

  visible: boolean = true;


    hide() {
        this.visible = false;

    }
    getTrColor(currentPrice){
      if (currentPrice>500)return "red";
    }
    choiseRes(){
      this.ProductsRes = [];
       for (let i of this.ProductsList){
         if (i.category==this.choice){
          this.ProductsRes.push(i); 

         }   
       }
       return this.ProductsRes;
    }
    addInput(){
  
    
      this.newProduct.push({id:this.idValue, name:this.nameValue, price: this.priceValue, category: this.categoryValue});
      console.log(this.newProduct);
      this.ProductsList.push(this.newProduct[this.i]);
      
      this.i++;
    }
}
