import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Product } from 'src/app/models/product'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService   } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
// interface Product {
//   product: string;
//   category: string;
//   ubication: string;
//   price: number;
// }

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{
  productForm: FormGroup; //
  title = 'Create Product';
  id:string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productService: ProductService,
              private aRouter: ActivatedRoute){
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      ubication: ['', Validators.required],
      price: ['', Validators.required]
    });
    //initialization of id 
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.isEdit();
  }

  addProduct(){
    console.log(this.productForm)

    // console.log(this.productForm.get('product')?.value);

    const PRODUCT: Product = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      ubication: this.productForm.get('ubication')?.value,
      price: this.productForm.get('price')?.value

    }
    
    if(this.id  !== null){
      this._productService.editProduct(this.id, PRODUCT).subscribe(data=>{
        this.toastr.info('Product update it  successfuly', 'Product Update');
        this.router.navigate(['/']);
      }, error=>{
        console.log(error);
        this.productForm.reset();
      });
    }else{
      //add product
      console.log(PRODUCT)
      this._productService.createProduct(PRODUCT).subscribe(data=>{
      this.toastr.success('Product add successfuly', 'Registration Product');
      this.router.navigate(['/']);
      }, error=>{
        console.log(error);
        this.productForm.reset();
      });
    }
    }

 
  isEdit() {
    if (this.id !== null) {
      this.title = 'Edit product';
      this._productService.extractProduct(this.id).subscribe(data => {
        this.productForm.setValue({
          product: data.name,
          category: data.category,
          ubication: data.ubication,
          price: data.price
        });
      });
    }
  }
  
}
