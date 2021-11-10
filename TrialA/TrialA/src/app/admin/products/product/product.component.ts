import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
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
  Name: string;
  ProductDesc: string;
  Price: number;  
  typeId: number;
  Image: string; //not sure - Is it blob?
  productForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.loadAllProducts()
    this.productForm = this.formbulider.group({  
      Name: ['', [Validators.required]],   
      ProductDesc: ['', [Validators.required]],  
      Price: ['', [Validators.required]],  
      typeId: ['', [Validators.required]],  
      Image: ['', [Validators.required]],  
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
      this.productForm.controls['Name'].setValue(Response.Name);
      this.productForm.controls['ProductDesc'].setValue(Response.ProductDesc);
      this.productForm.controls['Price'].setValue(Response.Price);
      this.productForm.controls['typeId'].setValue(Response.typeId);
      this.productForm.controls['Image'].setValue(Response.Image);
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
