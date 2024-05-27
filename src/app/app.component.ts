import { Component } from '@angular/core';
import { AuthService } from './services/checkout/authantication/auth.service';
import { StorageService } from './services/checkout/authantication/storage.service';
import { EventBusServiceService } from './services/EventBusService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FurnishUp';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;
showSupplierBoard= false;
eventBusSub?: Subscription;

  constructor(private storageService: StorageService, private authService: AuthService,  private eventBusService: EventBusServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showSupplierBoard = this.roles.includes('ROLE_SUPPLIER');

      this.username = user.username;
    }
    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }
  

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
