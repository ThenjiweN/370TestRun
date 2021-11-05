import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ApiService } from '../../../../service/api.service';  
import { Length } from 'src/app/model/length';

@Component({
  selector: 'app-hair-length',
  templateUrl: './hair-length.component.html',
  styleUrls: ['./hair-length.component.scss']
})
export class HairLengthComponent implements OnInit {
 
  allLengths: Observable<Length[]>; 
  lengthForm: any;
  Name: string; 
  ID: string;

  constructor(private apiService:ApiService,  private formbulider: FormBuilder) {
  }

 ngOnInit(): void {
   this.loadAllLengths()
   this.lengthForm = this.formbulider.group({  
    Name: ['', [Validators.required]],   
  });
 } 

  loadAllLengths() {  
   this.allLengths = this.apiService.getAllLength();  
 }
 
 createLength(length: Length) {  
  if (confirm("Confirm hair length details?")){
        this.apiService.createLength(length).subscribe( () => {       
          this.loadAllLengths();     
      })}
}  


getLengthById(ID: string) {    
  this.apiService.getLengthById(ID).subscribe(Response => {  
    this.ID = Response.ID
    this.lengthForm.controls['Name'].setValue(Response.Name);
  });  
}  

updateLength(length: Length) {  
  length.ID = this.ID
  if (confirm("Confirm hair length details?")){
        this.apiService.updateLength(length).subscribe( () => {   
        this.loadAllLengths();
      })}
}

 deleteLength(ID: string) {  
   if (confirm("Are you sure you want to delete this ?")) {   
   this.apiService.deleteLengthById(ID).subscribe(() => {  
     this.loadAllLengths();  
   });  
 }  
} 

}
  