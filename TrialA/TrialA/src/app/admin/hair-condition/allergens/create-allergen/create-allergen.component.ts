import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { Allergen } from 'src/app/model/allergen';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-create-allergen',
  templateUrl: './create-allergen.component.html',
  styleUrls: ['./create-allergen.component.scss']
})
export class CreateAllergenComponent implements OnInit {

  allergenForm: any;     

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }


  createAllergen(allergen: Allergen) {  
    if (confirm("Confirm allergen details?")){
          this.apiService.createAllergen(allergen).subscribe( () => {              
        })}
      this.onBack();  
  }
  
  onBack(){
    this.router.navigate(['./allergens']);
  }

  ngOnInit(): void {
    this.allergenForm = this.formbulider.group({  
      Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],  
      }); 
    }
  }
 