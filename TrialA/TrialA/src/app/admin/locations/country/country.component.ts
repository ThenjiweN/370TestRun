import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { Country } from 'src/app/model/country';
import { FormBuilder, Validators,  } from '@angular/forms'; 

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  allCountries: Observable<Country[]>; 
  countryId: string;
  name: string;
  countryForm

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
  }

 ngOnInit(): void {
   this.loadAllCountries()
   this.countryForm = this.formbulider.group({  
    name: ['', [Validators.required]],   
  });  
 } 


  loadAllCountries() {  
   this.allCountries = this.apiService.getAllCountry();  
 }

 createCountry(country: Country) {  
  if (confirm("Confirm Country details?")){
        this.apiService.createCountry(country).subscribe( () => {       
          this.loadAllCountries();     
      })}
}


getCountryById(ID: string) {    
  this.apiService.getCountryById(ID).subscribe(Response => {  
    this.countryId = Response.countryId
    this.countryForm.controls['name'].setValue(Response.name);
  });  
}  

updateCountry(country: Country) {  
  country.countryId = this.countryId
  if (confirm("Confirm hair Country details?")){
        this.apiService.updateCountry(country).subscribe( () => {   
        this.loadAllCountries();
      })}
}

 deleteCountry(ID: string) {  
   if (confirm("Are you sure you want to delete this ?")) {   
   this.apiService.deleteCountryById(ID).subscribe(() => {  
     this.loadAllCountries();  
   });  
 }  
} 

}
  