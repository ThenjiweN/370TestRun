import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../service/api.service';  
import { Suburb } from 'src/app/model/suburb';

@Component({
  selector: 'app-suburb',
  templateUrl: './suburb.component.html',
  styleUrls: ['./suburb.component.scss']
})
export class SuburbComponent implements OnInit {

  allSuburbs: Observable<Suburb[]>; 
  subhurbId: string;
  name: string;  
  cityId: number;
  suburbForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
  }

 ngOnInit(): void {
   this.loadAllSuburbs()
   this.suburbForm = this.formbulider.group({  
    name: ['', [Validators.required]],  
    cityId: ['', [Validators.required]], 
  });  
 } 

  loadAllSuburbs() {  
   this.allSuburbs = this.apiService.getAllSuburb();  
 }


 createSuburb(suburb: Suburb) {  
  if (confirm("Confirm hair suburb details?")){
        this.apiService.createSuburb(suburb).subscribe( () => {       
          this.loadAllSuburbs();     
      })}
}


getsuburbById(ID: string) {    
  this.apiService.getSuburbById(ID).subscribe(Response => {  
    this.subhurbId = Response.subhurbId
    this.suburbForm.controls['name'].setValue(Response.name);
    this.suburbForm.controls['cityId'].setValue(Response.cityId);
  });  
}  

updateSuburb(suburb: Suburb) {  
  suburb.subhurbId = this.subhurbId
  if (confirm("Confirm hair suburb details?")){
        this.apiService.updateSuburb(suburb).subscribe( () => {   
        this.loadAllSuburbs();
      })}
}


 deleteSuburb(ID: string) {  
   if (confirm("Are you sure you want to delete this ?")) {   
   this.apiService.deleteSuburbById(ID).subscribe(() => {  
     this.loadAllSuburbs();  
   });  
 }  
} 

}
  