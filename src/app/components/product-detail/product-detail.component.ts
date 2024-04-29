import { Component } from '@angular/core';
import { ProductsService } from 'src/app/APIs/products.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {


  products: any[] = [];
  constructor(private productservice: ProductsService){
  }
  // ngOnInit(): void {
  //   this.productservice.addProduct().subscribe(response =>{
  //     this.products = response;
  //     console.log(this.products)
  //   })
  // }

}
