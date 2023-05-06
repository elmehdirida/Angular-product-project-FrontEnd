import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, DataStateEnum, ProductActions, ProductState} from "../../../state/product.state";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements  OnInit{

  @Input() productsInput$: Observable<ProductState<Product[]>> | null =null ;
  readonly  dataStateEnum = DataStateEnum;
  @Output() eventEmitter : EventEmitter<ActionEvent>=new  EventEmitter<ActionEvent>()
  constructor() {
}
ngOnInit() {
}

  onSelect(p: Product) {
      this.eventEmitter.emit({type:ProductActions.SELECT_PRODUCT,payload:p})
  }

  OnDeleteProduct(p: Product) {
    this.eventEmitter.emit({type:ProductActions.DELETE_Product,payload:p})

  }

  OnUpdateProduct(p: Product) {
    this.eventEmitter.emit({type:ProductActions.UPDATE_Product,payload:p})

  }

  onActionEvent($event: ActionEvent) {
      this.eventEmitter.emit($event)
  }
}
