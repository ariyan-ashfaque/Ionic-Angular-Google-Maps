import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  handleNavigation = () => {
    this.router.navigate(['/add-map']);
  };
}
