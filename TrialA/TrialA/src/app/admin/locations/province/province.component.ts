import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { Province } from 'src/app/model/province';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {

  allProvinces: Observable<Province[]>; 
  provinceId: string;
  name: string;
  countryId: number;
  provinceForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
  }

 ngOnInit(): void {
   this.loadAllProvinces()
   this.provinceForm = this.formbulider.group({  
    name: ['', [Validators.required]],  
    countryId: ['', [Validators.required]], 
  }); 
 } 

  loadAllProvinces() {  
   this.allProvinces = this.apiService.getAllProvince();  
 }

 createProvince(province: Province) {  
  if (confirm("Confirm hair province details?")){
        this.apiService.createProvince(province).subscribe( () => {       
          this.loadAllProvinces();     
      })}
}
 

getProvinceById(ID: string) {    
  this.apiService.getProvinceById(ID).subscribe(Response => {  
    this.provinceId = Response.provinceId
    this.provinceForm.controls['name'].setValue(Response.name);
    this.provinceForm.controls['countryId'].setValue(Response.countryId);
  });  
}  

updateProvince(province: Province) {  
  province.provinceId = this.provinceId
  if (confirm("Confirm hair province details?")){
        this.apiService.updateProvince(province).subscribe( () => {   
        this.loadAllProvinces();
      })}
}

 
 deleteProvince(ID: string) {  
   if (confirm("Are you sure you want to delete this ?")) {   
   this.apiService.deleteProvinceById(ID).subscribe(() => {  
     this.loadAllProvinces();  
   });  
 }  
} 

}
  