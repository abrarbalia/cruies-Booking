import { Routes } from '@angular/router';

export const routes: Routes = [

  /* ================= HOME ================= */
  {
    path: '',
    loadComponent: () =>
      import('./features/auth/home/home')
        .then(c => c.HomeComponent)
  },

  /* ================= AUTH ================= */
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(c => c.Login)
  },

  {
    path: 'signin',
    loadComponent: () =>
      import('./features/auth/signin/signin')
        .then(c => c.Signin)
  },

  /* ================= BOOKINGS ================= */
  {
    path: 'my-bookings',
    loadComponent: () =>
      import('./features/my-booking/my-booking')
        .then(c => c.MyBooking)
  },

  /* ================= CRUISES ================= */
  {
    path: 'cruises',
    loadComponent: () =>
      import('./features/cruises/cruise-list/cruise-list')
        .then(c => c.CruiseListComponent)
  },

  {
    path: 'cruises-detail/:id',
    loadComponent: () =>
      import('./features/cruises/cruise-detail/cruise-detail')
        .then(c => c.CruiseDetailComponent)
  },

  /* ================= OFFERS ================= */
  {
    path: 'offers',
    loadComponent: () =>
      import('./features/offers/offers')
        .then(c => c.Offers)
  },

  {
    path: 'offers/features/kids-sail-free',
    loadComponent: () =>
      import('./features/offers/features/offers/kids-sail-free/kids-sail-free')
        .then(c => c.KidsSailFree)
  },

  {
    path: 'offers/second-guest-free',
    loadComponent: () =>
      import('./features/offers/features/offers/second-guest-free/second-guest-free')
        .then(c => c.SecondGuestFree)
  },

  {
    path: 'offers/free-beverages',
    loadComponent: () =>
      import('./features/offers/features/offers/free-beverages/free-beverages')
        .then(c => c.FreeBeverages)
  },

  {
    path: 'offers/free-wifi',
    loadComponent: () =>
      import('./features/offers/features/offers/free-wifi/free-wifi')
        .then(c => c.FreeWifi)
  },

  {
    path: 'offers/onboard-credit',
    loadComponent: () =>
      import('./features/offers/features/offers/onboard-credit/onboard-credit')
        .then(c => c.OnboardCredit)
  }

];