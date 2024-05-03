import { Injectable } from '@angular/core';
import { CartService } from 'src/app/Carts/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private cartService: CartService) { }

  checkout(): string {
    const orderNumber = 'ABEC123';
    return orderNumber;

  }

  calculateTotalFee(): number {
    let total = 0;
    for (const item of this.cartService.getCart()) {
      total+= item.price * item.quantity;
    }
    return total;
  }

  calculateDeliveryFee(): number {
    return 500;
  }

  calculateTotalPlusDeliveryFee(totalFee: number, deliveryFee:number): number {
    return totalFee + deliveryFee;
  }
}
