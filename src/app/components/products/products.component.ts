import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {
  products: any[] = [];
  constructor(private productListService: ProductListService){
  }
  ngOnInit(): void {
    this.productListService.getProducts().subscribe(response =>{
      this.products = response;
      console.log(this.products)
    })
  }
  
}
