import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  expiryDate: string = '';
  code: string = '';
  discount: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`code : ${this.code}, discount : ${this.discount}, expiry date : ${this.expiryDate}`);
    //write code to push object in array
    
    this.code = '';
    this.discount = '';
    this.expiryDate= '';
  }

}
