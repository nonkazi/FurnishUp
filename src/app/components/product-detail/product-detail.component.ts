import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params} from '@angular/router';
import { ProductsService } from 'src/app/APIs/products.service';
import { } from '../products/products.component'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  productId: any;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService){

  }
  
  ngOnInit(): void {
     /*this.activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      this.productsService.getProducts(+params.get('id')!).subscribe(
        (response: any)=>console.log("Hello")
      )
     })*/
     this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
     this.productsService.getProductById(+params.get('id')!).subscribe((response: any)=>{
        console.log(response);
      })
     })

  }

}
