import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';  
import { Product } from 'src/app/model/product';
import { FormBuilder, Validators,  } from '@angular/forms'; 


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  allProducts: Observable<Product[]>;   
  ID: string;
  ProductName: string;
  ProductDescription: string;
  ProductPrice: number;  
  TypeID: number;
  PictureUrl: string; //not sure - Is it blob?
  productForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.loadAllProducts()
    this.productForm = this.formbulider.group({  
      ProductName: ['', [Validators.required]],   
      ProductDescription: ['', [Validators.required]],  
      ProductPrice: ['', [Validators.required]],  
      TypeID: ['', [Validators.required]],  
      PictureUrl: ['', [Validators.required]],  
    });   
  } 
 
   loadAllProducts() {  
    this.allProducts = this.apiService.getAllProduct();  
  }


  createProduct(product: Product) {  
    if (confirm("Confirm product details?")){
          this.apiService.createProduct(product).subscribe( () => {       
            this.loadAllProducts();     
        })}
  }


  getProductById(ID: string) {    
    this.apiService.getProductById(ID).subscribe(Response => {  
      this.ID = Response.ID
      this.productForm.controls['ProductName'].setValue(Response.ProductName);
      this.productForm.controls['ProductDescription'].setValue(Response.ProductDescription);
      this.productForm.controls['ProductPrice'].setValue(Response.ProductPrice);
      this.productForm.controls['TypeID'].setValue(Response.TypeID);
      this.productForm.controls['PictureUrl'].setValue(Response.PictureUrl);
    });  
  }  

  updateProduct(product: Product) {  
    product.ID = this.ID
    if (confirm("Confirm hair product details?")){
          this.apiService.updateProduct(product).subscribe( () => {   
          this.loadAllProducts();
        })}
  }
 
  deleteProduct(ID: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteProductById(ID).subscribe(() => {  
      this.loadAllProducts();  
    });  
  }  
}

}
