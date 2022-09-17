import { Component, OnInit } from '@angular/core';
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
    description: 'Procesamiento hasta Intel® Core™ i7 de 11va generación',
    price: 4000,
    stock: 20,
    clearance:false,
  },
  {
    image: '../assets/img/legion.png',
    name: 'Legion 5 Pro 7ma Gen',
    description: 'Diezma la competencia con los procesadores móviles AMD Ryzen™ serie 6000',
    price: 4000,
    stock: 20,
    clearance:false,
  },
  {
    image: '../assets/img/lonovo.png',
    name: 'Lenovo ThinkBook 16p 2da Gen',
    description: 'Potente procesamiento hasta AMD Ryzen™ 9',
    price: 4000,
    stock: 0,
    clearance:true,
  },
  
];

  constructor() { }

  ngOnInit(): void {
  }

}
