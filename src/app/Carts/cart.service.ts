import { Injectable } from '@angular/core';
import { requestFurnitureProducts } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = []

  private cartQuantity: Number = 0;

  getCart(){
    return this.cart
  }

  getCartquantity(){
    return this.cartQuantity
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
