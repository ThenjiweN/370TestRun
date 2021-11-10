import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { FormBuilder, Validators,  } from '@angular/forms';  
import { ApiService } from '../../../service/api.service';  
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
}) 
export class CityComponent implements OnInit { 
 
  allCities: Observable<City[]>; 
  cityId: string;
  name: string;
  provinceId: number;
  cityForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
  }

 ngOnInit(): void {
   this.loadAllCities()
   this.cityForm = this.formbulider.group({  
    name: ['', [Validators.required]],   
    provinceId: ['', [Validators.required]],
  }); 
 } 

  loadAllCities() {  
   this.allCities = this.apiService.getAllCity();  
 }

 createCity(city: City) {  
  if (confirm("Confirm city details?")){
        this.apiService.createCity(city).subscribe( () => {       
          this.loadAllCities();     
      })}
}


getCityById(ID: string) {    
  this.apiService.getCityById(ID).subscribe(Response => {  
    this.cityId = Response.cityId
    this.cityForm.controls['name'].setValue(Response.name);
    this.cityForm.controls['provinceId'].setValue(Response.provinceId);
  });  
}  

updateCity(city: City) {  
  city.cityId = this.cityId
  if (confirm("Confirm city details?")){
        this.apiService.updateCity(city).subscribe( () => {   
        this.loadAllCities();
      })}
}

 deleteCity(ID: string) {  
   if (confirm("Are you sure you want to delete this ?")) {   
   this.apiService.deleteCityById(ID).subscribe(() => {  
     this.loadAllCities();  
   });  
 }  
} 

} 
 