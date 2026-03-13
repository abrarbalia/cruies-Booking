import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CruiseService } from '../../../services/cruise.service';

@Component({
  selector: 'app-cruise-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cruise-detail.html',
  styleUrls: ['./cruise-detail.css']
})
export class CruiseDetail implements OnInit {

  activeTab: string = 'overview';
  cruise: any;
  loading = true;

  selectedCabin: any = null;
  finalPrice: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cruiseService: CruiseService,
    private router: Router
  ) {}

  setTab(tab: string) {
    this.activeTab = tab;
  }

  async ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      // get cruise data
      this.cruise = await this.cruiseService.getCruiseById(id);

      // attach id manually (important for firebase docs)
      this.cruise.id = id;

      // auto select first cabin
      if (this.cruise?.cabins?.length) {
        this.selectCabin(this.cruise.cabins[0]);
      } else {
        this.finalPrice = this.cruise?.price || 0;
      }
    }

    this.loading = false;
  }

  // select cabin
  selectCabin(cabin: any) {
    this.selectedCabin = cabin;
    this.finalPrice = this.cruise.price * cabin.priceMultiplier;
  }

  // navigate to booking
  goToBooking() {

    if (!this.cruise?.id) {
      console.error('Cruise ID missing');
      return;
    }

    this.router.navigate(['/booking', this.cruise.id], {
      state: {
        cabin: this.selectedCabin,
        price: this.finalPrice
      }
    });

  }

}