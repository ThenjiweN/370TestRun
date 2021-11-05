import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';   
import { Condition } from '../../../../model/condition';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-hair-condition',
  templateUrl: './view-hair-condition.component.html',
  styleUrls: ['./view-hair-condition.component.scss']
})
export class ViewHairConditionComponent implements OnInit {

  dataSaved = false;   
  conditionForm: any;  
  Name!: string;
  ID!: number;
  allConditions!: Observable<Condition[]>;   
  conditionload!: number;
  massage!: string;  

  constructor(private apiService:ApiService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

     this.activatedRouter.params.subscribe(data => {
      this.ID = data.ID;    
    })


 
 
  }

/*      loadConditionToEdit(ID: number) {  
    this.apiService.getConditionById(ID).subscribe(data=> {  
      this.dataSaved = false;  
      this.conditionload = data.ID;  
      this.conditionForm.controls['name'].setValue(data.Name);  
    });     
  }    */

}
 