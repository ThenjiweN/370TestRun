import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';   
import { ApiService } from '../../../../service/api.service';  
import { Condition } from '../../../../model/condition';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-create-hair-condition',
  templateUrl: './create-hair-condition.component.html',
  styleUrls: ['./create-hair-condition.component.scss']
})
export class CreateHairConditionComponent implements OnInit {
 
  conditionForm: any;  

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }
 

createCondition(condition: Condition) {  
  if (confirm("Confirm hair condition details?")){
        this.apiService.createCondition(condition).subscribe( () => {              
      })}
    this.onBack();  
}
  
onBack(){
  this.router.navigate(['./hair-condition']);  
}

ngOnInit(): void {
  this.conditionForm = this.formbulider.group({  
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],   
    }); 
  }
}
