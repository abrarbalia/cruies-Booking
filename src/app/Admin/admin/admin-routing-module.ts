import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayout } from '../layout/admin-layout/admin-layout';
import { DashboardComponent } from './dashboard/dashboard';
import { Cruises } from './section/cruises/cruises';
import { Bookings } from './section/bookings/bookings';
import { Offers } from './section/offers/offers';
import { Use } from './section/use/use';

const routes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cruises', component: Cruises },
      { path: 'bookings', component: Bookings },
      { path: 'offers', component: Offers },
      { path: 'users', component: Use },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}