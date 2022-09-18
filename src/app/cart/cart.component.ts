import { Component, OnInit } from '@angular/core';
import { CompCartService } from '../comp-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart: CompCartService) { 
    this.cart;
  }
  ngOnInit(): void {
  }

}
