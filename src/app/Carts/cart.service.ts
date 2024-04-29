import { Injectable } from '@angular/core';
import { requestFurnitureProducts } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cart: any[] = []

  private cartItemCount = new BehaviorSubject<number>(0) 
  

  constructor() { }

  getCart(){
    return this.cart
  }

  getCartItemCount(){
    return this.cartItemCount
  }

  addTocart( product: requestFurnitureProducts){
    return this.cart.push(product)
  }

  clearCart(){
    this.cart = []
    return this.cart
  }

  constructor() { }
}
