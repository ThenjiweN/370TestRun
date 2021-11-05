import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';  
import { Density } from 'src/app/model/density';

@Component({
  selector: 'app-hair-density',
  templateUrl: './hair-density.component.html',
  styleUrls: ['./hair-density.component.scss']
})
export class HairDensityComponent implements OnInit {

  allDensities: Observable<Density[]>;   
  densityForm: any;
  Name: string; 
  ID: string;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }

  ngOnInit(): void {
    this.loadAllDensities()
    this.densityForm = this.formbulider.group({  
      Name: ['', [Validators.required]],   
    }); 
  } 

   loadAllDensities() {  
    this.allDensities = this.apiService.getAllDensity();  
  }

  createDensity(density: Density) {  
    if (confirm("Confirm hair density details?")){
          this.apiService.createDensity(density).subscribe( () => {       
            this.loadAllDensities();     
        })}
  }


  getDensityById(ID: string) {    
    this.apiService.getDensityById(ID).subscribe(Response => {  
      this.ID = Response.ID
      this.densityForm.controls['Name'].setValue(Response.Name);
    });  
  }  

  updateDensity(density: Density) {  
    density.ID = this.ID
    if (confirm("Confirm hair density details?")){
          this.apiService.updateDensity(density).subscribe( () => {   
          this.loadAllDensities();
        })}
  }

  deleteDensity(ID: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteDensityById(ID).subscribe(() => {  
      this.loadAllDensities();  
    });  
  }  
} 

}
  