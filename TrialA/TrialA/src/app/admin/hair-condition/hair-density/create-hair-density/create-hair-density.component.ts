import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { Density } from 'src/app/model/density';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hair-density',
  templateUrl: './create-hair-density.component.html',
  styleUrls: ['./create-hair-density.component.scss']
})
export class CreateHairDensityComponent implements OnInit {

  densityForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }


createDensity(density: Density) {  
  if (confirm("Confirm density details?")){
        this.apiService.createDensity(density).subscribe( () => {              
      })}
    this.onBack();  
}
 
onBack(){
  this.router.navigate(['./density']);
}

ngOnInit(): void {
  this.densityForm = this.formbulider.group({  
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],   
    }); 
  }
}
 