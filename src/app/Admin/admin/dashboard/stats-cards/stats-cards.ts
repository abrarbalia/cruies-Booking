import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-cards.html',
  styleUrls: ['./stats-cards.css']
})
export class StatsCardsComponent {
// stats-cards.component.ts
@Input() totalCruises: number | null = 0;
@Input() totalUsers: number | null = 0;
@Input() totalBookings: number | null = 0;
@Input() totalRevenue: number | null = 0;
}