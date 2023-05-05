import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
@Injectable({providedIn:"root"})
export  class  ProductService {
   host = "http://localhost:3000";

  constructor(private http:HttpClient ) {
}

getAllProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.host+"/product");
}

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(this.host+"/product/"+id);
  }

  getSelectedProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/product?selected=true");
  }
  getAvailableProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/product?available=true");
  }

  searchProduct(keyword: string):Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/product?name_like="+keyword);
  }

  Select(product: Product):Observable<Product>{
    product.selected=!product.selected
    return this.http.put<Product>(this.host+"/product/"+product.id,product);
  }

  Delete(product: Product):Observable<void> {
    return  this.http.delete<void>(this.host+"/product/"+product.id);
  }

  save(product: Product):Observable<Product>{
    return this.http.post<Product>(this.host+"/product",product);
  }

  update(product: Product) {
    return this.http.put<Product>(this.host+"/product/"+product.id,product);
  }
}
