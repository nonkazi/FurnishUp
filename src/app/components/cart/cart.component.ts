import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/APIs/products.service';
import { CartService } from 'src/app/Carts/cart.service';
import { ShoppingCart } from 'src/app/interface/shoppingCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  productList!: any[];
  products: any[] = [];
  subTotal!: any;

  constructor(private productservice: ProductsService, private cartService: CartService) {}

 ngOnInit(): void {
  this.cartService.getCart().subscribe({
    next: (res: any) => {
      console.log(res);
      this.productList = res;
    }
  });

    this.cartService.loadCart();
    this.products = this.cartService.getProduct();

      // // this.products = this.cartService.getCart();
      // this.calculateTotal();
      }


      // calculateTotal() {
      //   this.subTotal = this.cartService.getTotal();
      // }

      addToCart(product: any) {
        if (!this.cartService.productInCart(product)) {
          product.quantity = 1;
          this.cartService.addToCart(product);
          this.products = [...this.cartService.getProduct()];
          this.subTotal = product.price;
        }
      }

 //Remove a Product from Cart
 removeFromCart(product: any) {
  this.cartService.removeProduct(product);
  this.products = this.productservice.getProduct();
}

get total(){
  return this.products?.reduce(
    (sum, product) => ({
      quantity: 1,
      price: sum.price + product.quantity * product.price,
    }),
    { quantity: 1, price: 0 }
  ).price;
}


  
}

