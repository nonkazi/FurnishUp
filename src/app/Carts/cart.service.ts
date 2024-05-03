import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getTotal(): number {
    throw new Error('Method not implemented.');
  }
  private cart: any[] = [];

  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() {}

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addTocart(product: any) {
    let added = false;
    this.cart.forEach((item) => {
      item.id === product.id;
      item.quantity += 1;
      added = !added;
    });

    if (!added) {
      product.quantity = 1;
      this.cart.push(product);
    }

    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
}

 
