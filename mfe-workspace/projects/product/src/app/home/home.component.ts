import { Component, OnInit } from '@angular/core';
import { Product } from './products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: Product[] = [
    new Product('Redmi Note 5', 'Take photos, make calls or watch videos easily on this Redmi Note 5 Pro mobile phone. Powered by Qualcomm Snapdragon 636 Octa-core Processor, this mobile will provide a lag-free performance even when you’re multitasking. And, the 4000 mAh battery will ensure longer hours of entertainment without any interruption.', 10000, 'FREE50'),
    new Product('Redmi Note 5', 'Take photos, make calls or watch videos easily on this Redmi Note 5 Pro mobile phone. Powered by Qualcomm Snapdragon 636 Octa-core Processor, this mobile will provide a lag-free performance even when you’re multitasking. And, the 4000 mAh battery will ensure longer hours of entertainment without any interruption.', 15000, 'FREE50'),
    new Product('Redmi Note 5', 'Take photos, make calls or watch videos easily on this Redmi Note 5 Pro mobile phone. Powered by Qualcomm Snapdragon 636 Octa-core Processor, this mobile will provide a lag-free performance even when you’re multitasking. And, the 4000 mAh battery will ensure longer hours of entertainment without any interruption.', 20000, 'FREE50'),
    new Product('Redmi Note 5', 'Take photos, make calls or watch videos easily on this Redmi Note 5 Pro mobile phone. Powered by Qualcomm Snapdragon 636 Octa-core Processor, this mobile will provide a lag-free performance even when you’re multitasking. And, the 4000 mAh battery will ensure longer hours of entertainment without any interruption.', 70000, 'TRYNEW')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
