import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserdataService} from '../../userdata.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
id: any;
data = [];
orderdata: any;
  constructor(private activatedrouter: ActivatedRoute, private userservice: UserdataService, public router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedrouter.snapshot.paramMap.get('id');
    this.data = this.userservice.cdata;
    const ind = this.data.findIndex((res: any) => res.c_id == this.id);
    if (ind !== -1){
    this.orderdata = this.data[ind];
    }
  }
  back(): void{
    this.router.navigate(['orders']);
  }
}
