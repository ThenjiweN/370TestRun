import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';  
import { Suburb } from 'src/app/model/suburb';

@Component({
  selector: 'app-suburb',
  templateUrl: './suburb.component.html',
  styleUrls: ['./suburb.component.scss']
})
export class SuburbComponent implements OnInit {

  allSuburbs: Observable<Suburb[]>; 
  SuburbID: string;
  Name: string;  
  CityID: number;
  suburbForm: any;

  constructor(private apiService:ApiService, private formbulider: FormBuilder) {
  }

 ngOnInit(): void {
   this.loadAllSuburbs()
   this.suburbForm = this.formbulider.group({  
    Name: ['', [Validators.required]],  
    CityID: ['', [Validators.required]], 
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
    this.SuburbID = Response.SuburbID
    this.suburbForm.controls['Name'].setValue(Response.Name);
    this.suburbForm.controls['CityID'].setValue(Response.CityID);
  });  
}  

updateSuburb(suburb: Suburb) {  
  suburb.SuburbID = this.SuburbID
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
  