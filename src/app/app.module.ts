import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductAddNewComponent } from './components/product/product-add-new/product-add-new.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    HomeComponent,
    ProductAddNewComponent,
    ProductEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
