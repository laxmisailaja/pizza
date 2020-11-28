import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderdetailsComponent} from './orderdetails.component';
import { OrderdetailsRoutingModule } from './orderdetails-routing.module';


@NgModule({
  declarations: [OrderdetailsComponent],
  imports: [
    CommonModule,
    OrderdetailsRoutingModule
  ]
})
export class OrderdetailsModule { }
