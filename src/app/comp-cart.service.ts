import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { comp } from './comp-list/comp';

@Injectable({
  providedIn: 'root'
})
export class CompCartService {

  cartList : comp[] =[];
  
  constructor() { }

  addToCart(computers: comp) {
    let item = this.cartList.find((v1) => v1.name == computers.name);

    if (!item){
      this.cartList.push({...computers});
    } else{
      item.quantity += computers.quantity;
    }
    console.log(this.cartList);
  }

  
}
