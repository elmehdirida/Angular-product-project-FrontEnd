import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {ActionEvent, ProductActions} from "../../../../state/product.state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements  OnInit{
  @Input() product?:Product
  @Output() eventEmitter : EventEmitter<ActionEvent>=new  EventEmitter<ActionEvent>()
  constructor() {
  }
ngOnInit() {
}

  OnDeleteProduct(product: Product) {
    this.eventEmitter.emit({type:ProductActions.DELETE_Product,payload:product})

  }

  onSelect(product: Product) {
    this.eventEmitter.emit({type:ProductActions.SELECT_PRODUCT,payload:product})
  }

  OnUpdateProduct(p: any) {
    this.eventEmitter.emit({type:ProductActions.UPDATE_Product,payload:p})
  }
}
