import { Component } from '@angular/core';
import { ProductsService } from 'src/app/APIs/products.service';
import { CartService } from 'src/app/Carts/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  

  constructor(private productsService: ProductsService, private cartService:CartService ){}

  products: any[] = [];
    

  ngOnInit():void {
    this.addProduct();
    
  }

  
    addProduct() {
      const productData = [{
        id: 1,
        title: 'Sweet Dreams set',
        price2: 4999.99,
        price: 3500.00,
        image: 'assets/images/1000_F_210111161_RhaenrlDWFidISpkZQzKlHYvDSZIvNLD.jpg',
        category: 'furniture'
      },{
        id:2,
        title: 'New Dawn',
        price2: 3700.00,
        price: 2999.00,
        image: 'assets/images/1000_F_335742261_nLDDXBeaM55nlxG4OeCmEvLDno1qmlJQ.jpg',
        category: 'furniture'

      },
      {
        id: 3,
        title: 'Dreams bed',
        price2: 5000.00,
        price: 4000.99,
        image: 'assets/images/1000_F_388910352_p0LOpB3YJVwRahbMcBKiuIPjlKTpZZRE.jpg',
        category: 'furniture'
      },
      {
        id:4,
        title: 'Comfy Sleep',
        price2: 3300.00,
        price: 2700.00,
        image: 'assets/images/1000_F_492904673_hrQrz779pw3er4IraG0zmQA8TaeR88JL.jpg',
        category: 'furniture'
      },
      {
        id:5,
        title: 'green velvet',
        price2: 899.99,
        price: 1000.00,
        image: 'assets/images/1000_F_298830220_lHqS0oOJMOZ8F8ld7z7ZeAdZDv1Gt02U.jpg',
        category: 'furniture'
      },
      {
        id:6,
        title: 'grey mid',
        price2: 799.99,
        price: 999.99,
        image: 'assets/images/1000_F_423223088_K7LtjyVB6Ggvj2eXCYgH4wifwr567hjI.jpg',
        category: 'furniture'
      },
      {
        id:7,
        title: 'upholstered modern',
        price2:1500.00,
        price: 899.00,
        image: 'assets/images/1000_F_533213230_cuXvqARkWeP1Tzb5uwiTvbiMA7fPrFJu.jpg',
        category: 'furniture'
      },
      {
        id:8,
        title: 'tobacco brown',
        price2:999.00,
        price: 699.99,
        image: 'assets/images/240_F_552897399_yaVfQpVxq2I2KrfEYuewyM4KsQ0chpVm.jpg',
        category: 'furniture'
      },
      ];

      this.products = productData
  
      this.productsService.postProduct(productData)
        .subscribe(response => {
          this.products = productData;
          console.log(this.products)
        });
    }

    addToCart(product: any) {
      this.cartService.addTocart(product);
    }

   
    
  }

