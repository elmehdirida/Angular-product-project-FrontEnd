export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export  interface ProductState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
