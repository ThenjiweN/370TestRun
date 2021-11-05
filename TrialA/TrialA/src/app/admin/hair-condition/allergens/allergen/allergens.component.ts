import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';  
import { Allergen } from 'src/app/model/allergen';
import { FormBuilder, Validators,  } from '@angular/forms'; 

@Component({
  selector: 'app-allergens',
  templateUrl: './allergens.component.html',
  styleUrls: ['./allergens.component.scss']
})
export class AllergensComponent implements OnInit {

  allAllergens: Observable<Allergen[]>;   
  ID: string;
  Name: string;
  allergenForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }
 
  ngOnInit(): void {
    this.loadAllAllergens();
    this.allergenForm = this.formbulider.group({  
      Name: ['', [Validators.required]],   
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


  getAllergenById(ID: string) {    
    this.apiService.getAllergenById(ID).subscribe(Response => {  
      this.ID = Response.ID
      this.allergenForm.controls['Name'].setValue(Response.Name);
    });  
  }  

  updateAllergen(allergen: Allergen) {  
    allergen.ID = this.ID
    if (confirm("Confirm hair Allergen details?")){
          this.apiService.updateAllergen(allergen).subscribe( () => {   
          this.loadAllAllergens();
        })}
  }

  deleteAllergen(ID: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteAllergenById(ID).subscribe(() => {  
      this.loadAllAllergens();  
    });  
  }  
}
 
}
   