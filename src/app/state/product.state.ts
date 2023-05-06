export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export  enum ProductActions{
  GET_ALL_Product="[Product] Get ALL Products",
  GET_SELECTED_Product="[Product] Get Selected Products",
  GET_AVAILABLE_Product="[Product] Get Available Products",
  SEARCH_Product="[Product] Search Products",
  ADD_Product="[Product] Add Product",
  DELETE_Product="[Product] Delete Product",
  UPDATE_Product="[Product] Update Product",
  SELECT_PRODUCT ="[Product]  Select Product"
}

export interface ActionEvent{
  type:ProductActions,
  payload?:any
}

export  interface ProductState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
