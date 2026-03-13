import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardService } from '../../service/admin-dashboard.service';

@Component({
  selector: 'app-active-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-offers.html',
  styleUrls: ['./active-offers.css']
})
export class ActiveOffersComponent implements OnInit {

  active = 0;
  expired = 0;
  inactive = 0;

  constructor(private dashboardService: AdminDashboardService) {}

  async ngOnInit() {

    const data = await this.dashboardService.getOfferStatus();

    this.active = data.active;
    this.expired = data.expired;
    this.inactive = data.inactive;

  }

}