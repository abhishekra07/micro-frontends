import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: string = '';
  description: string = '';
  couponCode: string = '';
  price: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`name : ${this.name}, description : ${this.description}, price : ${this.price}, coupon code : ${this.couponCode}`);
    this.name = '';
    this.description = '';
    this.price = 0;
    this.couponCode = '';
  }

}
