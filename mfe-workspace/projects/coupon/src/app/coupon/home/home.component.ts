import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  couponList: {code: string, discount: number, expiryDate: string}[] = [
    {
      code: 'Free30',
      discount: 30,
      expiryDate: '08-21-2021' 
    },
    {
      code: 'Free50',
      discount: 50,
      expiryDate: '08-17-2021' 
    },
    {
      code: 'TRYNEW',
      discount: 60,
      expiryDate: '08-22-2021' 
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
