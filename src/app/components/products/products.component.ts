import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/APIs/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private productsService: ProductsService ){}

   Data: any[] = [];
  
  ngOnInit(){
    this.productsService.getProducts().subscribe((response) => {
      this.Data = response;
      console.log(this.Data);
    })
  }
}
