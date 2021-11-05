import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { City } from 'src/app/model/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {

  cityForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }
  

createCity(city: City) {  
  if (confirm("Confirm hair City details?")){
        this.apiService.createCity(city).subscribe( () => {              
      })}
    this.onBack();  
}
 
onBack(){
  this.router.navigate(['./city']);
}

ngOnInit(): void {
  this.cityForm = this.formbulider.group({  
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],   
    }); 
  }
}
 