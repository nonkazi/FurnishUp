import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  checkout(): string {
    const orderNumber = 'ABEC123';
    return orderNumber;

  }

  calculateTotalFee(items: any[]): number {
    let total = 0;
    for (const item of items) {
      total+= item.price;
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
