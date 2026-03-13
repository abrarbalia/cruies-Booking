import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { BookingService } from '../../services/booking.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.html',
  styleUrls: ['./offers.css']
})
export class Offers implements OnInit {

  offers: any[] = [];

  constructor(
    private offerService: OfferService,
    private bookingService: BookingService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      this.offers = await this.offerService.getOffers();
      console.log("Offers:", this.offers);
    } catch (error) {
      console.error("Error loading offers:", error);
    }
  }

  copyCoupon(code: string) {
    navigator.clipboard.writeText(code);
    alert(`Coupon ${code} copied!`);
  }

  applyOffer(offer: any) {
    this.bookingService.setOffer(offer);
    this.router.navigate(['/']);
  }

  scrollLeft(container: HTMLElement) {
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

}