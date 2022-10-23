import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CompCartService } from '../comp-cart.service';
import { comp } from '../comp-list/comp';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$!: Observable<comp[]>;
  constructor(private cart: CompCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {
  }

}
