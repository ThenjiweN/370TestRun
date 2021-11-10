import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators,  } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { Condition } from '../../../model/condition';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ 
  selector: 'app-hair-condition',
  templateUrl: './hair-condition.component.html',
  styleUrls: ['./hair-condition.component.scss']
})
export class HairConditionComponent implements OnInit {

  @ViewChild('closebutton') closebutton;
  allConditions: Observable<Condition[]>;   
  conditionForm: any;
  name: string; 
  id: string;

  constructor(private apiService:ApiService, private router: Router, private formbulider: FormBuilder ) {
   }

  ngOnInit(): void {
    this.loadAllConditions()
    this.conditionForm = this.formbulider.group({  
      name: ['', [Validators.required]],   
    });   
    
  } 

   loadAllConditions() {  
    this.allConditions = this.apiService.getAllCondition();  
  }


  createCondition(condition: Condition) {  
    if (confirm("Confirm hair condition details?")){
          this.apiService.createCondition(condition).subscribe( () => {       
            this.loadAllConditions();     
        })}
  }


  getConditionById(id: string) {    
    this.apiService.getConditionById(id).subscribe(Response => {  
      this.id = Response.id
      this.conditionForm.controls['name'].setValue(Response.name);
    });  
  }  

  updateCondition(condition: Condition) {  
    condition.id = this.id
    if (confirm("Confirm hair condition details?")){
          this.apiService.updateCondition(condition).subscribe( () => {   
          this.closebutton.nativeElement.click();  
          this.loadAllConditions();
        })}
  }


  deleteCondition(id: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
      this.apiService.deleteConditionById(id).subscribe(() => {  
      this.loadAllConditions();  
    });   
  }  
}
  
}
 