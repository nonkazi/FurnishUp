import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  successMessage: boolean = false;
  orderNumber: string | undefined;
  items: any[] = [];
  totalFee: number = 0;
  deliveryFee: number =0;
  totalPlusDelivery: number = 0;
  includeDelivery: boolean = false;
  address: string = '';
  selectedMethod: string | undefined;

  isAddressValid(): boolean {
    return this.address.trim() !== '';
  }

  constructor(private checkoutService: CheckoutService) {}

 

  checkout() {
    this.orderNumber = this.checkoutService.checkout();
    this.successMessage = true;
}

ngOnInit(): void {
  this.calculateTotals();
}

calculateTotals() {
  this.totalFee = this.checkoutService.calculateTotalFee(this.items);
  this.deliveryFee = this.includeDelivery ? this.checkoutService.calculateDeliveryFee() : 0;
  this.totalPlusDelivery = this.checkoutService.calculateTotalPlusDeliveryFee(this.totalFee, this.deliveryFee);
}


toggleDelivery() {
  this.includeDelivery = !this.includeDelivery;
  this.calculateTotals();
}

}
