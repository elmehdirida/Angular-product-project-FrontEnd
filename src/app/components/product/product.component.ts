import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/productService";
import {Product} from "../../model/product.model";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {ActionEvent, DataStateEnum, ProductActions, ProductState} from "../../state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements  OnInit{
  products$: Observable<ProductState<Product[]>> | null =null ;
  readonly  dataStateEnum = DataStateEnum;
  constructor(private productService:ProductService,private router:Router ) {
  }
  ngOnInit(): void {
  }
  OnGetAllProduct() {
    this.products$ = this.productService.getAllProduct()
      .pipe(
        map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  OnGetSelectedProduct() {
    this.products$ = this.productService.getSelectedProduct()
      .pipe(
        map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  OnGetAvailableProduct() {
    this.products$ = this.productService.getAvailableProduct()
      .pipe(
        map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  OnSearch(dataForm: any) {
    console.log(dataForm.keyword)
    this.products$ = this.productService.searchProduct(dataForm.keyword)
      .pipe(
        map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onSelect(p: Product) {
      this.productService.Select(p).subscribe(
        value => {
          p.selected=value.selected
        }
      )
  }

  OnDeleteProduct(p: Product) {
    this.productService.Delete(p).subscribe(value => {
      this.OnGetAllProduct()
      }

    )

  }

  OnNewProduct() {
    this.router.navigateByUrl("/newProduct")
  }

  OnUpdateProduct(p: Product) {
    this.router.navigateByUrl("/editProduct/"+p.id)
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActions.GET_ALL_Product:this.OnGetAllProduct();break;
      case ProductActions.GET_SELECTED_Product:this.OnGetSelectedProduct();break;
      case ProductActions.GET_AVAILABLE_Product:this.OnGetAvailableProduct();break;
      case ProductActions.SEARCH_Product:this.OnSearch($event.payload);break;
      case ProductActions.UPDATE_Product:this.OnUpdateProduct($event.payload);break;
      case ProductActions.DELETE_Product:this.OnDeleteProduct($event.payload);break;
      case ProductActions.ADD_Product:this.OnNewProduct();break;
      case ProductActions.SELECT_PRODUCT:this.onSelect($event.payload)
    }

  }
}
