import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import {OrderdetailsModule} from './components/orderdetails/orderdetails.module';

const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full'},
  { path: 'orders', component: OrdersComponent },
  {path: 'orderdetails/:id', loadChildren: () => OrderdetailsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
