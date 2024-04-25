import { Component } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

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
