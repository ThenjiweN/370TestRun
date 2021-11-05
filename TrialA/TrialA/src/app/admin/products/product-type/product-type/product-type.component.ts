import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';  
import { ProductType } from 'src/app/model/product-type';
import { FormBuilder, Validators,  } from '@angular/forms'; 

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {

  TypeID: string;
  Name: string;
  allProductTypes: Observable<ProductType[]>;   
  typeForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder ) {
   }

  ngOnInit(): void {
    this.loadAllProductTypes();
    this.typeForm = this.formbulider.group({  
      Name: ['', [Validators.required]],   
    });
  } 
 
   loadAllProductTypes() {  
    this.allProductTypes = this.apiService.getAllProType();  
  }

  createType(protype: ProductType) {  
    if (confirm("Confirm product type details?")){
          this.apiService.createProTypes(protype).subscribe( () => {       
            this.loadAllProductTypes();     
        })}
  }


  getTypeById(ID: string) {    
    this.apiService.getProTypeById(ID).subscribe(Response => {  
      this.TypeID = Response.TypeID
      this.typeForm.controls['Name'].setValue(Response.Name);
    });  
  }  

  updateType(protype: ProductType) {  
    protype.TypeID = this.TypeID
    if (confirm("Confirm product type details?")){
          this.apiService.updateProType(protype).subscribe( () => {     
          this.loadAllProductTypes();
        })}
  }

  deleteProductType(ID: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteProTypeById(ID).subscribe(() => {  
      this.loadAllProductTypes();  
    });  
  }  
}
} 
