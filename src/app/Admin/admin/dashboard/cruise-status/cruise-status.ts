import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardService } from '../../service/admin-dashboard.service';

@Component({
  selector: 'app-cruise-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cruise-status.html',
  styleUrls: ['./cruise-status.css']
})
export class CruiseStatusComponent implements OnInit {

  completed = 0;
  upcoming = 0;
  total = 0;

  constructor(private dashboardService: AdminDashboardService) {}

  async ngOnInit() {

    const data = await this.dashboardService.getCruiseStatus();

    this.completed = data.completed;
    this.upcoming = data.upcoming;
    this.total = data.total;

  }

}