import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { Allergen } from 'src/app/model/allergen';
import { FormBuilder, Validators,  } from '@angular/forms'; 

@Component({
  selector: 'app-allergens',
  templateUrl: './allergens.component.html',
  styleUrls: ['./allergens.component.scss']
})
export class AllergensComponent implements OnInit {

  allAllergens: Observable<Allergen[]>;   
  id: string;
  name: string;
  allergenForm: any; 

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }
 
  ngOnInit(): void {
    this.loadAllAllergens();
    this.allergenForm = this.formbulider.group({  
      name: ['', [Validators.required]],   
    });  
  } 
 
   loadAllAllergens() {  
    this.allAllergens = this.apiService.getAllAllergen();  
  }

  createAllergen(allergen: Allergen) {  
    if (confirm("Confirm Allergen details?")){
          this.apiService.createAllergen(allergen).subscribe( () => {       
            this.loadAllAllergens();     
        })}
  }


  getAllergenById(id: string) {    
    this.apiService.getAllergenById(id).subscribe(Response => {  
      this.id = Response.id
      this.allergenForm.controls['name'].setValue(Response.name);
    });  
  }  

  updateAllergen(allergen: Allergen) {  
    allergen.id = this.id
    if (confirm("Confirm hair Allergen details?")){
          this.apiService.updateAllergen(allergen).subscribe( () => {   
          this.loadAllAllergens();
        })}
  }

  deleteAllergen(id: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteAllergenById(id).subscribe(() => {  
      this.loadAllAllergens();  
    });  
  }  
}
 
}
   