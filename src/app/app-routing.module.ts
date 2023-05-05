import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import {ProductAddNewComponent} from "./components/product/product-add-new/product-add-new.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";

const routes: Routes = [
  {
    path : "products" ,component: ProductComponent
  },
  {
    path : "" ,component: HomeComponent
  },
  {
    path : "newProduct" ,component: ProductAddNewComponent
  },
  {
    path : "editProduct/:id" ,component: ProductEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
