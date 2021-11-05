import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { Province } from 'src/app/model/province';
import { Router } from '@angular/router';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-create-province',
  templateUrl: './create-province.component.html',
  styleUrls: ['./create-province.component.scss']
})
export class CreateProvinceComponent implements OnInit {

  allCountries: Observable<Country[]>; 
  provinceForm: any;   

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }
  
 
createProvince(province: Province) {  
  if (confirm("Confirm province details?")){
        this.apiService.createProvince(province).subscribe( () => {              
      })}
    this.onBack();  
}
 
onBack(){
  this.router.navigate(['./province']);
}

loadAllCountries() {  
  this.allCountries = this.apiService.getAllCountry();  
}

ngOnInit(): void {
  this.provinceForm = this.formbulider.group({  
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],   
    }); 
  }

} 
 