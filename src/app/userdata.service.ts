import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
customerdata: any = [];
cdata: any = [];
  constructor() {
}

 Get_Data(){
  return this.customerdata = [
    {
      c_id: 1,
      c_name: 'Sailaja',
      c_address: '16/4,main street,HYD',
      c_items: [
        {
          item: 'Veg-Pizza',
          price: 300
        },
        {
          item: 'Non-veg-Pizza',
          price: 500
        },
        {
          item: 'Drink',
          price: 100
        }
      ],
      total: 0,
      status: 'Order Received'
    },
    {
      c_id: 2,
      c_name: 'Krishna',
      c_address: '16/4,main street2,BNG',
      c_items: [
        {
          item: 'Veg-Pizza',
          price: 300
        },
        {
          item: 'Cup-Cake',
          price: 200
        }
      ],
      total: 0,
      status: 'Order Received'
    },
    {
      c_id: 3,
      c_name: 'Mahesh',
      c_address: '16/4,main street,RJY',
      c_items: [
        {
          item: 'Non-veg-Pizza',
          price: 500
        },
        {
          item: 'Drink',
          price: 100
        }
      ],
      total: 0,
      status: 'Order Received'
    },
    {
      c_id: 4,
      c_name: 'Lavanya',
      c_address: '16/4,main street3,CNI',
      c_items: [
        {
          item: 'Veg-Pizza',
          price: 300
        },
        {
          item: 'Veg-Pizza',
          price: 500
        }
      ],
      total: 0,
      status: 'Order Received'
    },
    {
      c_id: 5,
      c_name: 'Madhu',
      c_address: '16/4,main street4,KKD',
      c_items: [
        {
          item: 'Drink',
          price: 100
        },
        {
          item: 'Cup-Cake',
          price: 200
        }
      ],
      total: 0,
      status: 'Order Received'
    }];
}
}
