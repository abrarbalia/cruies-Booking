import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardService } from '../../service/admin-dashboard.service';

@Component({
  selector: 'app-recent-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-bookings.html',
  styleUrls: ['./recent-bookings.css']
})
export class RecentBookingsComponent implements OnInit {

  bookings: any[] = [];

  constructor(private dashboardService: AdminDashboardService) {}

  async ngOnInit() {
    this.bookings = await this.dashboardService.getRecentBookings();
  }

}