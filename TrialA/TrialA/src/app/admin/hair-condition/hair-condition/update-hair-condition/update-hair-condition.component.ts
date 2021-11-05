import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';   
import { Condition } from '../../../../model/condition';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-hair-condition',
  templateUrl: './update-hair-condition.component.html',
  styleUrls: ['./update-hair-condition.component.scss']
})
export class UpdateHairConditionComponent implements OnInit {

  dataSaved = false;
  conditionForm: any;  
  Name: string; 
  ID: string;
  allConditions!: Observable<Condition[]>;   
  conditionload = null;

  constructor(private formbulider: FormBuilder, private router: Router, private apiService:ApiService) { }

  ngOnInit() {
    this.getConditionById(this.ID)
    this.conditionForm = this.formbulider.group({  
      Name: ['', [Validators.required]],   
    });  
  }
  


  getConditionById(ID: string) {    
    this.apiService.getConditionById(ID).subscribe(Response => {  
      this.ID = Response.ID
      this.conditionForm.controls['Name'].setValue(Response.Name);
    });  
  }  



  updateCondition(condition: Condition) {  
    if (confirm("Confirm hair condition details?")){
          this.apiService.updateCondition(condition).subscribe( () => {              
        })}
      this.onBack();  
  }

  onBack(){
    this.router.navigate(['./hair-condition']); 
  }

 
/*    loadConditionToEdit(ID: number) {  
    this.conditionService.getConditionById(ID).subscribe(data=> {    
      this.dataSaved = false;  
      this.conditionload = data.ID;  
      this.conditionForm.controls['Name'].setValue(data.Name);   
    });  

  } 
 /*     this.route.params.subscribe(
      (params) => {
        this.ID = params['id'];
        console.log(this.ID);
      });
 */

}
 
