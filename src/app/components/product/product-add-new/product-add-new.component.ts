import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/productService";

@Component({
  selector: 'app-product-add-new',
  templateUrl: './product-add-new.component.html',
  styleUrls: ['./product-add-new.component.css']
})
export class ProductAddNewComponent implements OnInit{
  productFormGroup!: FormGroup;
  submitted: boolean = false;
  constructor(private fb:FormBuilder,private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],
    });
  }


  OnSaveProduct() {
    this.submitted=true
    if(this.productFormGroup?.invalid) return;
    this.productService.save(this.productFormGroup.value).subscribe(
        value => {
          alert("success")
        }
      )

  }
}
