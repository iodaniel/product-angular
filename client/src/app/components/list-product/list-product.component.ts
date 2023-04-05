import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
  listProducts: Product[]= []
  title = 'Product List';
 


  constructor(private _productService: ProductService,
   private toastr: ToastrService ){}
  
  ngOnInit(): void {
      this.obtainProduct();
  }


  obtainProduct() {
    this._productService.getProducts().subscribe(
      data => {
        console.log(data);
        this.listProducts = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteProduct(id: any){
    this._productService.deleteProduct(id).subscribe(data=>{
      this.toastr.error('The product was delete sucessfully', 'Delete Product');
      this.obtainProduct();
    }, error => {  
      console.log(error);
    });
  
  }

}

