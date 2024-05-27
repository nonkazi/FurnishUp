import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/checkout/authantication/user.service';

@Component({
  selector: 'app-UserDashboard',
  templateUrl: './UserDashboard.component.html',
  styleUrls: ['./UserDashboard.component.css']
})
export class UserDashboardComponent implements OnInit {


  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }
}