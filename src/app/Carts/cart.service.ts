import { Injectable } from '@angular/core';

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

  addTocart(){
    
  }

  constructor() { }
}
