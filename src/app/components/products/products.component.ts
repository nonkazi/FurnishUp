import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/APIs/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private productsService: ProductsService ){}

  products: any;
    

  ngOnInit() {
    this.addProduct();
  }

  
    addProduct() {
      const productData = [{
        title: 'Sweet Dreams set',
        price: 3500.00,
        image: 'assets/images/1000_F_210111161_RhaenrlDWFidISpkZQzKlHYvDSZIvNLD.jpg',
        category: 'furniture'
      },{
        title: 'New Dawn',
        price: 2999.00,
        image: 'assets/images/1000_F_335742261_nLDDXBeaM55nlxG4OeCmEvLDno1qmlJQ.jpg',
        category: 'furniture'

      },
      {
        title: 'Dreams bed',
        price: 4000.99,
        image: 'assets/images/1000_F_388910352_p0LOpB3YJVwRahbMcBKiuIPjlKTpZZRE.jpg',
        category: 'furniture'
      },
      {
        title: 'Comfy Sleep',
        price: 2700.00,
        image: 'assets/images/1000_F_492904673_hrQrz779pw3er4IraG0zmQA8TaeR88JL.jpg',
        category: 'furniture'
      },
      {
        title: 'ghhhg f',
        price: 1000.00,
        image: 'assets/images/1000_F_298830220_lHqS0oOJMOZ8F8ld7z7ZeAdZDv1Gt02U.jpg',
        category: 'furniture'
      },
      {
        title: 'hjjhk hg',
        price: 999.99,
        image: 'assets/images/1000_F_423223088_K7LtjyVB6Ggvj2eXCYgH4wifwr567hjI.jpg',
        category: 'furniture'
      },
      {
        title: 'fghjhj ghh',
        price: 899.00,
        image: 'assets/images/1000_F_533213230_cuXvqARkWeP1Tzb5uwiTvbiMA7fPrFJu.jpg',
        category: 'furniture'
      },
      {
        title: 'fghjbnm hg',
        price: 999.99,
        image: 'assets/images/1000_F_613074987_3vNNgy9UM3lhITDWcSAc5sA7C6Nb7wKq.jpg',
        category: 'furniture'
      },
      ];

      this.products = productData
  
      this.productsService.addProduct(productData)
        .subscribe(response => {
          this.products = response;
          console.log(this.products)
          
        });
    }
  }

