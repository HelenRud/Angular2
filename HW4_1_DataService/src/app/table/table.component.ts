import { Component, OnInit, Input } from '@angular/core';
import { Products } from './products';
import { DataService} from './data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  constructor(private dataService: DataService) {  }

  ProductsList: Products[] = this.dataService.PRODUCTS;
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
