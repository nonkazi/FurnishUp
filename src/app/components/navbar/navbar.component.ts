import { Component, Input, OnInit} from '@angular/core';
import { CartService } from 'src/app/Carts/cart.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  cartItemCount: number = 0;
  isLoggedIn: boolean = false;
  router: any;

  constructor(private cartService: CartService,) {}
  

  ngOnInit() {
    this.cartService.getCartItemCount().subscribe((count: number) => {
      this.cartItemCount = count;
      this.isLoggedIn = true;

    }
    );

   
    }
  
  logout() {
    this.isLoggedIn = false;
    console.log(this.isLoggedIn);
    this.router.navigate(['/home']);
  
  }

  
}
