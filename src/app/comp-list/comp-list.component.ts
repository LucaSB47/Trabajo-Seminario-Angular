import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { CompCartService } from '../comp-cart.service';
import { CompsDataService } from '../comps-data.service';
import { comp } from './comp';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.scss']
})
export class CompListComponent implements OnInit {

  computers: comp[]= [];

  constructor(private cart: CompCartService,
    private compService: CompsDataService) { 
  }

  ngOnInit(): void {
    this.compService
       .getAll()
       .subscribe((computers) => (this.computers = computers));
  }

  addToCart(computers : comp):void{

    this.cart.addToCart(computers)
    computers.stock -=computers.quantity;
    computers.quantity=0;
  }
  MaxReached(m:String){
    alert(m);
  }


}
