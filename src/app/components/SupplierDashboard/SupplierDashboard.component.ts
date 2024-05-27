import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/checkout/authantication/user.service';

@Component({
  selector: 'app-SupplierDashboard',
  templateUrl: './SupplierDashboard.component.html',
  styleUrls: ['./SupplierDashboard.component.css']
})
export class SupplierDashboardComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }
}
