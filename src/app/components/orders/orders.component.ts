import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../userdata.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  })
export class OrdersComponent implements OnInit {
data: any = [];
cdata: any = [];
local: any = [];
  constructor( private userservice: UserdataService, public router: Router) { }

  ngOnInit(): void {
  this.data =  this.userservice.Get_Data();
  if (this.userservice.cdata.length > 0){
    this.cdata = this.userservice.cdata;
  }else{
    this.userservice.cdata = [...this.data];
    this.cdata = this.userservice.cdata;
    this.cdata.forEach((element: any) => {
      element.c_items.forEach((x: any) => {
        element.total += x.price;
      });
    });
  }
  }
  changestatus(id: any){
    const ind = this.cdata.findIndex((res: any) => res.c_id == id);
    if (ind !== -1){
    if (this.cdata[ind].status === 'Order Received'){
      this.cdata[ind].status = 'Preparing';
    }else if (this.cdata[ind].status === 'Preparing'){
       this.cdata[ind].status = 'Ready to Serve';
    }else{

    }
  }
  }
  goto_orders(id: any){
   this.router.navigate(['orderdetails/', id]);
  }
}
