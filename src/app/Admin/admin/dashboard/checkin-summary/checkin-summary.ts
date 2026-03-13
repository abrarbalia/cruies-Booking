import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardService } from '../../service/admin-dashboard.service';

@Component({
  selector: 'app-checkin-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkin-summary.html',
  styleUrls: ['./checkin-summary.css']
})
export class CheckinSummaryComponent implements OnInit {

  confirmed = 0;
  pending = 0;
  cancelled = 0;

  constructor(private dashboardService: AdminDashboardService) {}

  async ngOnInit() {

    const data = await this.dashboardService.getCheckinSummary();

    this.confirmed = data.confirmed;
    this.pending = data.pending;
    this.cancelled = data.cancelled;

  }

}