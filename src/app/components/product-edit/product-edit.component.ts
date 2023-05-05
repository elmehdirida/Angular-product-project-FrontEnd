import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/productService";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements  OnInit{
  productId:number
  submitted : boolean=false;
  productFormGroup? : FormGroup
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService,private formBuilder:FormBuilder) {
  this.productId=activatedRoute.snapshot.params['id']
  }
  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(
      value => {
    this.productFormGroup = this.formBuilder.group(
      {
        id:[value.id],
        name:[value.name,Validators.required],
        price:[value.price,Validators.required],
        quantity:[value.quantity,Validators.required],
        selected:[value.selected,Validators.required],
        available:[value.available,Validators.required],
      }
    )
      }
    )
  }

  OnUpdateProduct() {
    this.productService.update(this.productFormGroup?.value).subscribe(
      value => {
        alert('success')
      }
    )
  }
}
