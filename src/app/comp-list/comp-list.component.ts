import { Component, OnInit } from '@angular/core';
import { CompCartService } from '../comp-cart.service';
import { comp } from './comp';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.scss']
})
export class CompListComponent implements OnInit {

  computers: comp[]= [
    {
    image: '../assets/img/lenovo1.png',
    name: 'lenovo thinkpad E14 2da Gen',
    description: 'Intel® Core™ i7 de 11va generación',
    price: 4000,
    stock: 20,
    clearance:false,
    quantity:0,
  },
  {
    image: '../assets/img/legion.png',
    name: 'Legion 5 Pro 7ma Gen',
    description: 'AMD Ryzen™ serie 6000',
    price: 4000,
    stock: 20,
    clearance:false,
    quantity:0,
  },
  {
    image: '../assets/img/lonovo.png',
    name: 'Lenovo ThinkBook 16p 2da Gen',
    description: 'AMD Ryzen™ 9',
    price: 4000,
    stock: 0,
    clearance:true,
    quantity:0,
  },
  
];

  constructor(private cart: CompCartService) { 
    this.cart;
  }

  ngOnInit(): void {
  }

  addToCart(computers : comp):void{

    this.cart.addToCart(computers)
    computers.stock -=computers.quantity;
    computers.quantity=0;
  }



}
