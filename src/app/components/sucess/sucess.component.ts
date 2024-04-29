import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss']
})
export class SucessComponent {
  @Input() orderNumber: string | undefined;
  @Input() includeDelivery:boolean | undefined;


  getMessage(): string {
    if(this.includeDelivery) {
      return 'Your order will be delivered';
    }else {
      return 'Your order is ready for collection';
    }
  }

}
