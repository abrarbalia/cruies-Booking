import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing-module';
import { AdminLayout } from '../layout/admin-layout/admin-layout';

@NgModule({
 
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}