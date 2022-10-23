import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { comp } from './comp-list/comp';

@Injectable({
  providedIn: 'root'
})
export class CompCartService {
  private _cartList : comp[]=[];
  cartList : BehaviorSubject <comp[]> = new BehaviorSubject(this._cartList);
  
  constructor() { }

  addToCart(computers: comp) {
    let item = this._cartList.find((v1) => v1.name == computers.name);

    if (!item){
      this._cartList.push({...computers});
    } else{
      item.quantity += computers.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

  
}
