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

  addTocart(products: any) {
    let added = false;
    this.cart.forEach((item) => {
      item.id === products.id;
      item.quantity += 1;
      added = !added;
    });

    if (!added) {
      products.quantity = 1;
      this.cart.push(products);
    }

    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
}

 
