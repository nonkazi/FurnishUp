import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShoppingCart, cItems } from '../interface/shoppingCart';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart: any[] = []

  private cartItemCount = new BehaviorSubject<number>(0) 

  constructor( private http : HttpClient){}
  
 
  getCart(){
    //return this.cart
    return this.http.get('');
  }

  getProduct(){
    return this.cart
  }

  getCartItemCount(){
    return this.cartItemCount
  }

  // ADD TO CART BUTTON
  addTocart(products:any){
    let added = false;
      this.cart.forEach((item)=> {
        item.id === products.id
        item.quantity += 1;
        added = !added;
      });
       
    if (!added) {
      products.quantity = 1;
      this.cart.push(products);
    }
    console.log(this.cart)
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  
  addToCart(addedProduct: any) {
    this.cart.push(addedProduct);
    this.saveCart();
  }

  loadCart(): void {
    this.cart = JSON.parse(localStorage.getItem('cItems') as any) || [];
  }
  
  saveCart(): void {
    localStorage.setItem('cItems', JSON.stringify(this.cart))
  }

  productInCart(product: any): boolean {
    return this.cart.findIndex((x: any) => x.id === product.id) > -1;
  }

  removeProduct(product: any) {
    const index = this.cart.findIndex((x: any) => x.id === product.id);

    if (index > -1) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart(){
    localStorage.clear()
  }

 
}