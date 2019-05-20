import { Component, OnInit, Input } from '@angular/core';
import { Products } from './products';
import { DataService} from './data.service';

let data= {
  idGen(){
      return  Math.floor(Math.random() * (10000)) + 999;
  },
  getData(){
  const PRODUCTS: Products[] = [
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
return  PRODUCTS;
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [{provide: DataService, useValue: data}]
})
export class TableComponent{
  constructor(private dataService: DataService) {  }

  ProductsList: Products[] = this.dataService.getData();
  
  ProductsRes: Products[]=[];
  newProduct: Products[]=[];
  i: number =0;
  choice: string;
  idValue: number;
  priceValue: number;
  categoryValue: string;
  nameValue: string;


  @Input()
  rows: number;
  ProductsListSlice=this.ProductsList.slice(0, this.rows);
  
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
      if((!this.nameValue)||(!this.priceValue)||(!this.categoryValue)) {
        alert("Fill all fields in the form!");
        return;
      }

      this.newProduct.push({id: this.dataService.idGen(), name:this.nameValue, price: this.priceValue, category: this.categoryValue});
      console.log(this.newProduct);
      this.ProductsList.push(this.newProduct[this.i]);
      this.i++;
    }
    delItem(delProd){
      console.log(delProd.id);
      this.ProductsList=this.ProductsList.filter(pr => pr.id !== delProd.id);
    }
}
