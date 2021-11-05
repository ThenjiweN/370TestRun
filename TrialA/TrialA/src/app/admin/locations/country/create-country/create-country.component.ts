import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { Country } from 'src/app/model/country'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.scss']
})
export class CreateCountryComponent implements OnInit {

  countryForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }

  createCountry(country: Country) {  
    if (confirm("Confirm country details?")){
          this.apiService.createCountry(country).subscribe( () => {              
        })}
      this.onBack();  
  }
   
  onBack(){
    this.router.navigate(['./country']);
  }
  
  ngOnInit(): void {
    this.countryForm = this.formbulider.group({  
      Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],   
      }); 
    }

}
