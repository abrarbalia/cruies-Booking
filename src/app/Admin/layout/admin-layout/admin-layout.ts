import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "../../admin/dashboard/dashboard";
import { Overview } from '../../admin/section/overview/overview';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.html',
  styleUrls: ['./admin-layout.css'],
  standalone: true,       // ✅ this makes it standalone
  imports: [CommonModule, RouterModule]
})
export class AdminLayout {}