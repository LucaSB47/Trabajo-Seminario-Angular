import { NumberSymbol } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { comp } from '../comp-list/comp';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.scss']
})
export class InputIntComponent implements OnInit {

  constructor() { }
  @Input()
  quantity!: number;
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter <number> = new EventEmitter<number>();

  @Output()
  MaxReached: EventEmitter <String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  upQuantity():void{
    if (this.quantity < this.max){
        this.quantity++;
        this.quantityChange.emit(this.quantity);
    }
    else{
      this.MaxReached.emit("Se alcanzo el maximo");
    }
  }

  downQuantity(){
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }
}

changeQuantity(event: any){

}

}
