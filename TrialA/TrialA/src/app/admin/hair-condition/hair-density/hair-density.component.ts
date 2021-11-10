import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { Density } from 'src/app/model/density';

@Component({
  selector: 'app-hair-density',
  templateUrl: './hair-density.component.html',
  styleUrls: ['./hair-density.component.scss']
})
export class HairDensityComponent implements OnInit {

  allDensities: Observable<Density[]>;   
  densityForm: any;
  name: string; 
  id: string;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
   }

  ngOnInit(): void {
    this.loadAllDensities()
    this.densityForm = this.formbulider.group({  
      name: ['', [Validators.required]],   
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


  getDensityById(id: string) {    
    this.apiService.getDensityById(id).subscribe(Response => {  
      this.id = Response.id
      this.densityForm.controls['name'].setValue(Response.name);
    });  
  }  

  updateDensity(density: Density) {  
    density.id = this.id
    if (confirm("Confirm hair density details?")){
          this.apiService.updateDensity(density).subscribe( () => {   
          this.loadAllDensities();
        })}
  }

  deleteDensity(id: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.apiService.deleteDensityById(id).subscribe(() => {  
      this.loadAllDensities();  
    });  
  }  
} 

}
  