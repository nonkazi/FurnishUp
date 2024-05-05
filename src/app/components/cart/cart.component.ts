import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsService } from 'src/app/APIs/products.service';
import { CartService } from 'src/app/Carts/cart.service';
import { AuthService } from 'src/app/services/checkout/authantication/auth.service';
import { ShoppingCart } from 'src/app/interface/shoppingCart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  products: any[] = [];
  subTotal: any = 0;
  cart!: ShoppingCart[];

  constructor(private productservice: ProductsService, 
    private cartService: CartService,
    private authService:AuthService,
    private router: Router) {}

 ngOnInit(): void {
    this.subTotal = this.cartService.getTotalPrice(); 
    this.products = this.cartService.getCart();
    //IF USER IS NOT LOGGED IN AND WANT TO ACCESS CART
    if (!this.authService.getIsLoggedIn()) {
     
      this.router.navigate(['/login']);
    }
    }

    deleteProduct(id: number) : void {

      this.productservice.deleteProduct(id).subscribe(()=>{
        console.log("delete successful")
      })
    }
    
    incrementQ( products : any){
      products.quantity++
    }

    addToCart(product: any) {
    this.products.push(product)
      }

      getCart(){
        return this.products
      }

 //Remove a Product from Cart
 removeFromCart(product: any) {
  this.cartService.removeCartData(product);
}

  
}


// ########### ON HOLD CODE ##############
 // if (!this.cartService.productInCart(product)) {
        //   product.quantity = 1;
        //   this.cartService.addToCart(product);
        //   this.products = [...this.cartService.getProduct()];
        //   this.subTotal = product.price;
        // }

// get total(){
//   return this.products?.reduce(
//     (sum, product) => ({
//       quantity: 1,
//       price: sum.price + product.quantity * product.price,
//     }),
//     { quantity: 1, price: 0 }
//   ).price;
// }

// this.cartService.getProductData() 
  //   .subscribe(res=>{ 
  //   this.products = res;
  //  
  //   })
