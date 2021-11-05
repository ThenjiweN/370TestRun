import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { ProductType } from 'src/app/model/product-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-type',
  templateUrl: './create-product-type.component.html',
  styleUrls: ['./create-product-type.component.scss']
})
export class CreateProductTypeComponent implements OnInit {

  productTypeForm: any;   

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }


createProductType(ProductType: ProductType) {  
  if (confirm("Confirm Product Type details?")){
        this.apiService.createProTypes(ProductType).subscribe( () => {              
      })}
    this.onBack();  
}
 
onBack(){
  this.router.navigate(['./product-type']);
}

ngOnInit(): void {
  this.productTypeForm = this.formbulider.group({  
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],  
    }); 
  }

}
 