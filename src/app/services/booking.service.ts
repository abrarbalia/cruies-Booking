// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {

//   private booking: any = {
//     cruise: null,
//     cabin: null,
//     passengers: [],
//     emergencyContact: null,
//     totalAmount: 0,
//     offer: null,
//     discount: 0   // ⭐ store discount amount
//   };

//   setCruise(cruise: any) {
//     this.booking.cruise = cruise;
//   }

//   setCabin(cabin: any) {
//     this.booking.cabin = cabin;
//   }

//   setPassengers(passengers: any[]) {
//     this.booking.passengers = passengers;
//   }

//   setEmergency(contact: any) {
//     this.booking.emergencyContact = contact;
//   }

//   setTotal(total: number) {
//     this.booking.totalAmount = total;
//   }

//   // ⭐ Save applied offer
//   setOffer(offer: any) {
//     this.booking.offer = offer;
//   }

//   // ⭐ Save discount value
//   setDiscount(amount: number) {
//     this.booking.discount = amount;
//   }

//   getBooking() {
//     return this.booking;
//   }

//   clear() {
//     this.booking = {
//       cruise: null,
//       cabin: null,
//       passengers: [],
//       emergencyContact: null,
//       totalAmount: 0,
//       offer: null,
//       discount: 0
//     };
//   }

// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private booking: any = {
    cruise: null,
    cabin: null,
    passengers: [],
    emergencyContact: null,

    originalAmount: 0,   // ⭐ price before discount
    discount: 0,         // ⭐ discount amount
    totalAmount: 0,      // ⭐ final amount after discount

    offer: null          // ⭐ applied offer (null if none)
  };

  setCruise(cruise: any) {
    this.booking.cruise = cruise;
  }

  setCabin(cabin: any) {
    this.booking.cabin = cabin;
  }

  setPassengers(passengers: any[]) {
    this.booking.passengers = passengers;
  }

  setEmergency(contact: any) {
    this.booking.emergencyContact = contact;
  }

  // ⭐ Save price before discount
  setOriginalAmount(amount: number) {
    this.booking.originalAmount = amount;
  }

  // ⭐ Save discount amount
  setDiscount(amount: number) {
    this.booking.discount = amount;
  }

  // ⭐ Save final total
  setTotal(amount: number) {
    this.booking.totalAmount = amount;
  }

  // ⭐ Save applied offer
  setOffer(offer: any | null) {
    this.booking.offer = offer;
  }

  getBooking() {
    return this.booking;
  }

  clear() {
    this.booking = {
      cruise: null,
      cabin: null,
      passengers: [],
      emergencyContact: null,
      originalAmount: 0,
      discount: 0,
      totalAmount: 0,
      offer: null
    };
  }

}