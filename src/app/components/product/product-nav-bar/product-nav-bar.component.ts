import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActions} from "../../../state/product.state";

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent  implements  OnInit{
  @Output() eventEmitter : EventEmitter<ActionEvent>=new  EventEmitter<ActionEvent>()
  constructor() {
  }

  ngOnInit(): void {
  }
  OnGetAllProduct() {
      this.eventEmitter.emit({type:ProductActions.GET_ALL_Product})
  }

  OnGetSelectedProduct() {
    this.eventEmitter.emit({type:ProductActions.GET_SELECTED_Product})

  }

  OnGetAvailableProduct() {
    this.eventEmitter.emit({type:ProductActions.GET_AVAILABLE_Product})
  }

  OnNewProduct() {
    this.eventEmitter.emit({type:ProductActions.ADD_Product})

  }

  OnSearch(value: string) {
    this.eventEmitter.emit({type:ProductActions.SEARCH_Product,payload:value})

  }


}
