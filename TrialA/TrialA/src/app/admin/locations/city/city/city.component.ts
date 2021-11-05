import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { FormBuilder, Validators,  } from '@angular/forms';  
import { ApiService } from '../../../../service/api.service';  
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
}) 
export class CityComponent implements OnInit {
 
  allCitys: Observable<City[]>; 
  CityID: string;
  Name: string;
  ProvinceID: number;
  cityForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
  }

 ngOnInit(): void {
   this.loadAllCities()
   this.cityForm = this.formbulider.group({  
    Name: ['', [Validators.required]],   
    ProvinceID: ['', [Validators.required]],
  }); 
 } 

  loadAllCities() {  
   this.allCitys = this.apiService.getAllCity();  
 }

 createCity(city: City) {  
  if (confirm("Confirm city details?")){
        this.apiService.createCity(city).subscribe( () => {       
          this.loadAllCities();     
      })}
}


getCityById(ID: string) {    
  this.apiService.getCityById(ID).subscribe(Response => {  
    this.CityID = Response.CityID
    this.cityForm.controls['Name'].setValue(Response.Name);
    this.cityForm.controls['ProvinceID'].setValue(Response.ProvinceID);
  });  
}  

updateCity(city: City) {  
  city.CityID = this.CityID
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
 